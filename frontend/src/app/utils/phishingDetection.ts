
export interface URLFeatures {
  urlLength: number;
  domainLength: number;
  hasIP: boolean;
  hasAtSymbol: boolean;
  hasDoubleSlash: boolean;
  numSubdomains: number;
  numDashes: number;
  numDigits: number;
  numSpecialChars: number;
  hasHttps: boolean;
  suspiciousKeywords: string[];
  entropyScore: number;
  hasSuspiciousTLD: boolean;
}

export interface ScanResult {
  url: string;
  isPhishing: boolean;
  riskScore: number; // 0-100
  confidence: number; // 0-100
  // features: URLFeatures;
  features?: any;   // 👈 make optional
warnings?: string[];      // 👈 make optional
  domainAge: number; // days
  hasValidSSL: boolean;
  sslIssuer: string;
  ipAddress: string;
  registrar: string;
  // warnings: string[];
  timestamp: Date;
}

const SUSPICIOUS_KEYWORDS = [
  'login', 'verify', 'account', 'secure', 'update', 'confirm',
  'banking', 'paypal', 'amazon', 'apple', 'microsoft', 'google',
  'signin', 'password', 'suspend', 'alert', 'urgent', 'action'
];

const SUSPICIOUS_TLDS = [
  '.tk', '.ml', '.ga', '.cf', '.gq', '.xyz', '.top', '.work', '.click'
];

function calculateEntropy(str: string): number {
  const len = str.length;
  const frequencies: { [key: string]: number } = {};
  
  for (let i = 0; i < len; i++) {
    const char = str[i];
    frequencies[char] = (frequencies[char] || 0) + 1;
  }
  
  let entropy = 0;
  for (const char in frequencies) {
    const p = frequencies[char] / len;
    entropy -= p * Math.log2(p);
  }
  
  return entropy;
}

// ================= FEATURE EXTRACTION =================

export function extractFeatures(url: string): URLFeatures {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `http://${url}`);
    const hostname = urlObj.hostname;
    const fullURL = urlObj.href;
    
    const hasIP = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname);

    const parts = hostname.split('.');
    const numSubdomains = Math.max(0, parts.length - 2);

    const lowerURL = fullURL.toLowerCase();
    const foundKeywords = SUSPICIOUS_KEYWORDS.filter(keyword => 
      lowerURL.includes(keyword)
    );

    const hasSuspiciousTLD = SUSPICIOUS_TLDS.some(tld => 
      hostname.toLowerCase().endsWith(tld)
    );

    const numDashes = (hostname.match(/-/g) || []).length;
    const numDigits = (hostname.match(/\d/g) || []).length;
    const numSpecialChars = (fullURL.match(/[^a-zA-Z0-9.-/:\?&=]/g) || []).length;

    const entropyScore = calculateEntropy(hostname);

    return {
      urlLength: fullURL.length,
      domainLength: hostname.length,
      hasIP,
      hasAtSymbol: fullURL.includes('@'),
      hasDoubleSlash: fullURL.split('//').length > 2,
      numSubdomains,
      numDashes,
      numDigits,
      numSpecialChars,
      hasHttps: urlObj.protocol === 'https:',
      suspiciousKeywords: foundKeywords,
      entropyScore,
      hasSuspiciousTLD
    };
  } catch (error) {
    throw new Error('Invalid URL format');
  }
}

// ================= BACKEND API =================

export async function detectPhishingAPI(url: string) {
  const res = await fetch("https://phishing-backend-h3lf.onrender.com/predict",  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  if (!res.ok) {
  const text = await res.text();
  console.error("Backend error:", text);
  throw new Error("Backend responded with error");
}

  return await res.json();
}

// ================= MOCK DOMAIN INFO =================

export function checkDomainInfo(url: string) {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `http://${url}`);
    const hostname = urlObj.hostname;
    const hashCode = hostname.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const domainAge = 100 + (hashCode % 3000);
    const hasValidSSL = urlObj.protocol === 'https:';

    return {
      domainAge,
      hasValidSSL,
      sslIssuer: "Let's Encrypt",
      ipAddress: "192.168.1.1",
      registrar: "Namecheap"
    };
  } catch {
    return {
      domainAge: 0,
      hasValidSSL: false,
      sslIssuer: 'N/A',
      ipAddress: 'N/A',
      registrar: 'N/A'
    };
  }
}


// ================= WARNINGS =================

export function generateWarnings(features: URLFeatures): string[] {
  const warnings: string[] = [];

  if (features.hasIP) warnings.push('⚠️ URL uses IP address');
  if (!features.hasHttps) warnings.push('⚠️ No HTTPS');
  if (features.suspiciousKeywords.length > 0) warnings.push('⚠️ Suspicious keywords detected');

  return warnings;
}

// ================= MAIN FUNCTION =================

export async function scanURL(url: string): Promise<ScanResult> {
  const features = extractFeatures(url);

  // 🔥 REAL BACKEND CALL
  const apiResult = await detectPhishingAPI(url);

  const domainInfo = checkDomainInfo(url);
  const warnings = generateWarnings(features);

  return {
    url,
    isPhishing: apiResult.prediction === "phishing",
    riskScore: apiResult.risk_score,
    confidence: 90,
    features,
    domainAge: domainInfo.domainAge,
    hasValidSSL: domainInfo.hasValidSSL,
    sslIssuer: domainInfo.sslIssuer,
    ipAddress: domainInfo.ipAddress,
    registrar: domainInfo.registrar,
    warnings,
    timestamp: new Date()
  };
}

// ================= REPORT =================

export function generateReport(result: ScanResult): string {
  const date = result.timestamp.toLocaleString();
  
  return `
PHISHING DETECTION REPORT
Generated: ${date}

URL: ${result.url}

VERDICT: ${result.isPhishing ? '🚨 PHISHING' : '✅ SAFE'}
Risk Score: ${result.riskScore}/100
Confidence: ${result.confidence}%
`;
}


