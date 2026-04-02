
import type { ScanResult } from "../utils/phishingDetection";
import { useState, useEffect } from "react";

export function History() {

  const [history, setHistory] = useState<ScanResult[]>([]);

  const loadHistory = () => {
    const stored = localStorage.getItem('scanHistory');

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        const cleaned: ScanResult[] = parsed
          .filter((item: any) => item && item.url)
          .map((item: any) => ({
            url: item.url || "",
            isPhishing: item.isPhishing ?? false,
            riskScore: item.riskScore ?? 0,
            confidence: item.confidence ?? 0,

            features: item.features || {
              urlLength: 0,
              domainLength: 0,
              hasIP: false,
              hasAtSymbol: false,
              hasDoubleSlash: false,
              numSubdomains: 0,
              numDashes: 0,
              numDigits: 0,
              numSpecialChars: 0,
              hasHttps: false,
              suspiciousKeywords: [],
              entropyScore: 0,
              hasSuspiciousTLD: false
            },

            warnings: item.warnings || [],

            domainAge: item.domainAge ?? 0,
            hasValidSSL: item.hasValidSSL ?? false,
            sslIssuer: item.sslIssuer || "N/A",
            ipAddress: item.ipAddress || "N/A",
            registrar: item.registrar || "N/A",

            timestamp: item.timestamp
              ? new Date(item.timestamp)
              : new Date()
          }));

        setHistory(cleaned);

      } catch (err) {
        console.error("History parse error", err);
        setHistory([]);
      }
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Scan History</h2>

      {history.length === 0 ? (
        <p>No history found</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="mb-2 p-3 border rounded">
            <p>{item.url}</p>
            <p>{item.isPhishing ? "Phishing" : "Safe"}</p>
          </div>
        ))
      )}
    </div>
  );
}

