
import { Shield, AlertTriangle, Download, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import type { ScanResult } from "../utils/phishingDetection";

// ✅ FIXED PROPS
interface ScanResultsProps {
  result?: ScanResult | null;
  onDownloadReport: () => void;
  onReportToCybercrime: () => void;
}

export function ScanResults(props: ScanResultsProps) {
  const result = props.result;

  // ✅ LOADING GUARD
  if (!result) {
    return (
      <div className="p-6 text-center text-gray-500">
        Scanning URL... ⏳
      </div>
    );
  }

  const getRiskColor = (score: number) => {
    if (score >= 70) return "text-red-600";
    if (score >= 50) return "text-orange-600";
    if (score >= 30) return "text-yellow-600";
    return "text-green-600";
  };

  const getRiskBgColor = (score: number) => {
    if (score >= 70) return "bg-red-50 border-red-200";
    if (score >= 50) return "bg-orange-50 border-orange-200";
    if (score >= 30) return "bg-yellow-50 border-yellow-200";
    return "bg-green-50 border-green-200";
  };

  const getRiskLabel = (score: number) => {
    if (score >= 70) return "Critical Risk";
    if (score >= 50) return "High Risk";
    if (score >= 30) return "Medium Risk";
    return "Low Risk";
  };

  return (
    <div className="space-y-6">

      {/* Main Verdict */}
      <Card className={`p-8 border-2 ${getRiskBgColor(result.riskScore || 0)}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-full ${result.isPhishing ? "bg-red-200" : "bg-green-200"}`}>
              {result.isPhishing ? (
                <AlertTriangle className="w-12 h-12 text-red-600" />
              ) : (
                <Shield className="w-12 h-12 text-green-600" />
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-2">
                {result.isPhishing ? (
                  <span className="text-red-600">⚠️ Phishing Detected</span>
                ) : (
                  <span className="text-green-600">✓ Appears Safe</span>
                )}
              </h2>
              <p className="text-gray-600 break-all">{result.url}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className={`text-6xl font-bold ${getRiskColor(result.riskScore || 0)}`}>
              {result.riskScore || 0}
            </div>
            <div className="text-sm font-medium text-gray-600">Risk Score</div>
            <Badge variant={(result.riskScore || 0) >= 50 ? "destructive" : "secondary"}>
              {getRiskLabel(result.riskScore || 0)}
            </Badge>
          </div>

        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={props.onDownloadReport} className="bg-blue-600 hover:bg-blue-700">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>

        {result.isPhishing && (
          <Button onClick={props.onReportToCybercrime} variant="destructive">
            <Mail className="w-4 h-4 mr-2" />
            Report to Cybercrime
          </Button>
        )}
      </div>

      {/* AI Analysis */}
      <Card className="p-6">
        <p>
          Features analyzed: {Object.keys(result.features || {}).length}
        </p>
      </Card>

      {/* WARNINGS */}
      {(result.warnings || []).length > 0 && (
        <Card className="p-6 bg-red-50 border-2 border-red-200">
          <ul>
            {(result.warnings || []).map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </Card>
      )}

      {/* Example safe usage */}
      <div>
        URL Length: {result.features?.urlLength ?? 0}
      </div>

    </div>
  );
}
