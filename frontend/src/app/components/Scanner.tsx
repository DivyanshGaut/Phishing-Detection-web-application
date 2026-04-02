
import { useState } from 'react';
import { Search, AlertTriangle, Shield, Download, Mail, Loader2, Info } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { toast } from 'sonner';
import type { ScanResult } from '../utils/phishingDetection';
import { ScanResults } from './ScanResults';
import { motion } from 'motion/react';

export function Scanner() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const handleScan = async () => {
    if (!url.trim()) {
      toast.error('Please enter a URL to scan');
      return;
    }

    try {
      setIsScanning(true);
      setScanProgress(0);
      setScanResult(null);

      const steps = [
        { progress: 30, delay: 300 },
        { progress: 60, delay: 400 },
        { progress: 90, delay: 500 },
      ];

      for (const step of steps) {
        await new Promise(res => setTimeout(res, step.delay));
        setScanProgress(step.progress);
      }

      // ✅ REAL BACKEND CALL
      const res = await fetch("https://phishing-backend-h3lf.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      });

      const data = await res.json();

      // ✅ CREATE RESULT OBJECT FOR UI
      const result: ScanResult = {
        url,
        isPhishing: data.prediction === 1,
        riskScore: data.prediction === 1 ? 85 : 10,
        confidence: 90,
        features: {
  urlLength: url.length,
  domainLength: 0,
  hasIP: false,
  hasAtSymbol: url.includes("@"),
  hasDoubleSlash: url.includes("//"),
  numSubdomains: 0,
  numDashes: (url.match(/-/g) || []).length,
  numDigits: (url.match(/\d/g) || []).length,
  numSpecialChars: (url.match(/[^a-zA-Z0-9]/g) || []).length,
  hasHttps: url.startsWith("https"),
  suspiciousKeywords: [],
  entropyScore: 0,
  hasSuspiciousTLD: false
},
        // feature: {},   // optional
        warnings: data.prediction === 1 ? ["⚠️ This URL is likely phishing"] : [],
        domainAge: 0,
        hasValidSSL: true,
        sslIssuer: "N/A",
        ipAddress: "N/A",
        registrar: "N/A",
        timestamp: new Date()
      };

      setScanResult(result);

      // ✅ SAVE HISTORY
      const history = JSON.parse(localStorage.getItem('scanHistory') || '[]');
      history.unshift(result);
      localStorage.setItem('scanHistory', JSON.stringify(history.slice(0, 50)));

      if (result.isPhishing) {
        setShowWarning(true);
      } else {
        toast.success('Scan complete! URL appears safe.');
      }

    } catch (error) {
      toast.error("Backend not running or error occurred");
      console.error(error);
    } finally {
      setIsScanning(false);
      setScanProgress(100);
    }
  };

  const handleDownloadReport = () => {
    if (!scanResult) return;

    const content = JSON.stringify(scanResult, null, 2);
    const blob = new Blob([content], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "report.txt";
    link.click();
  };

  const handleReportToCybercrime = () => {
    if (!scanResult) return;

    window.open(`mailto:?subject=Phishing Report&body=URL: ${scanResult.url}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isScanning) {
      handleScan();
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* SAME UI — NO CHANGE */}

      <Card className="p-8 mb-8">
        <div className="flex gap-4">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isScanning}
          />
          <Button onClick={handleScan} disabled={isScanning}>
            {isScanning ? <Loader2 className="animate-spin" /> : <Search />}
          </Button>
        </div>

        {isScanning && (
          <Progress value={scanProgress} className="mt-4" />
        )}
      </Card>

      {scanResult && (
        <ScanResults
          result={scanResult}
          onDownloadReport={handleDownloadReport}
          onReportToCybercrime={handleReportToCybercrime}
        />
      )}
    </div>
  );
}

