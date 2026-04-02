import { BookOpen, Shield, AlertTriangle, Eye, Link2, Mail, Lock, CheckCircle2, XCircle, Lightbulb, Brain } from 'lucide-react';
import { Card } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';

export function Education() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm font-medium">
          <BookOpen className="w-4 h-4" />
          <span>Security Education</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Learn to Identify Phishing Attacks
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Empower yourself with knowledge to recognize and avoid phishing attempts. 
          Understanding these tactics is your first line of defense.
        </p>
      </div>

      {/* What is Phishing */}
      <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
        <div className="flex items-start gap-4">
          <div className="bg-blue-200 p-3 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-blue-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">What is Phishing?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Phishing is a type of cyber attack where criminals impersonate legitimate organizations 
              to steal sensitive information such as passwords, credit card numbers, and personal data. 
              These attacks typically occur through fraudulent emails, websites, or messages that appear 
              to be from trusted sources.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">3.4B</div>
                <div className="text-sm text-gray-600">Phishing emails sent daily</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-red-600 mb-1">$12.5B</div>
                <div className="text-sm text-gray-600">Lost to phishing in 2023</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-orange-600 mb-1">90%</div>
                <div className="text-sm text-gray-600">Of data breaches start with phishing</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Red Flags */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-lg">
            <Eye className="w-6 h-6 text-red-600" />
          </div>
          Common Red Flags
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 hover:border-red-200 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Suspicious URLs</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Look for misspellings, unusual characters, or domains that don't match the company name.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="destructive" className="text-xs">Bad</Badge>
                <code className="text-xs">paypa1.com</code>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="destructive" className="text-xs">Bad</Badge>
                <code className="text-xs">app1e-verify.tk</code>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge className="text-xs bg-green-600">Good</Badge>
                <code className="text-xs">paypal.com</code>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-red-200 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Urgent Language</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Phishing attempts create false urgency to pressure quick action without thinking.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="bg-red-50 p-2 rounded border border-red-200">
                "⚠️ Your account will be suspended in 24 hours!"
              </div>
              <div className="bg-red-50 p-2 rounded border border-red-200">
                "🚨 Urgent action required to verify your identity"
              </div>
              <div className="bg-red-50 p-2 rounded border border-red-200">
                "⏰ Limited time offer - Act now!"
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-red-200 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Generic Greetings</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Legitimate companies usually address you by name, not generic terms.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <div className="bg-red-50 p-2 rounded border border-red-200">
                "Dear Customer"
              </div>
              <div className="bg-red-50 p-2 rounded border border-red-200">
                "Dear User"
              </div>
              <div className="bg-green-50 p-2 rounded border border-green-200">
                "Dear John Smith" ✓
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-red-200 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <XCircle className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Unexpected Attachments</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Be wary of unexpected attachments, especially executable files or documents with macros.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="destructive" className="text-xs">Danger</Badge>
                <code className="text-xs">.exe .bat .js .vbs</code>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="text-xs">Caution</Badge>
                <code className="text-xs">.zip .rar .doc .xls</code>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Protection Tips */}
      <Card className="p-8 mb-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <div className="bg-green-200 p-2 rounded-lg">
            <Shield className="w-6 h-6 text-green-700" />
          </div>
          How to Protect Yourself
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ProtectionTip
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            title="Verify the URL"
            description="Always check the address bar before entering credentials. Look for HTTPS and the correct domain."
          />
          <ProtectionTip
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            title="Use 2FA"
            description="Enable two-factor authentication on all accounts for an extra layer of security."
          />
          <ProtectionTip
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            title="Think Before You Click"
            description="Hover over links to see the actual URL. Don't click suspicious links in emails or messages."
          />
          <ProtectionTip
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            title="Keep Software Updated"
            description="Regular updates patch security vulnerabilities that could be exploited by attackers."
          />
          <ProtectionTip
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            title="Use Strong Passwords"
            description="Create unique, complex passwords for each account. Consider using a password manager."
          />
          <ProtectionTip
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
            title="Be Skeptical"
            description="If something seems too good to be true or creates urgency, it probably is a scam."
          />
        </div>
      </Card>

      {/* Types of Phishing */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Brain className="w-6 h-6 text-purple-600" />
          </div>
          Types of Phishing Attacks
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="email-phishing" className="border-2 rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Email Phishing</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-4">
              <p className="mb-3">
                The most common type of phishing attack where attackers send fraudulent emails 
                pretending to be from legitimate organizations.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-medium text-gray-800 mb-2">Example:</p>
                <p className="text-sm">
                  An email claiming to be from your bank asking you to verify your account 
                  by clicking a link and entering your credentials.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="spear-phishing" className="border-2 rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">Spear Phishing</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-4">
              <p className="mb-3">
                Targeted attacks aimed at specific individuals or organizations, often using 
                personalized information to appear more legitimate.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="font-medium text-gray-800 mb-2">Example:</p>
                <p className="text-sm">
                  An email appearing to be from your CEO asking you to urgently transfer funds 
                  or share confidential information.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="whaling" className="border-2 rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-red-600" />
                <span className="font-semibold">Whaling</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-4">
              <p className="mb-3">
                High-level spear phishing attacks targeting senior executives, board members, 
                or other high-profile individuals with access to sensitive data.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-medium text-gray-800 mb-2">Example:</p>
                <p className="text-sm">
                  Sophisticated attacks on C-level executives to gain access to company financial 
                  systems or confidential strategic information.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="smishing" className="border-2 rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Smishing (SMS Phishing)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-4">
              <p className="mb-3">
                Phishing attacks conducted via SMS text messages, often containing links 
                to malicious websites or phone numbers to call.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="font-medium text-gray-800 mb-2">Example:</p>
                <p className="text-sm">
                  "Your package delivery failed. Click here to reschedule: [suspicious link]"
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="clone-phishing" className="border-2 rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Link2 className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Clone Phishing</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-4">
              <p className="mb-3">
                Attackers create nearly identical copies of legitimate emails you've received 
                before, replacing links or attachments with malicious versions.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-medium text-gray-800 mb-2">Example:</p>
                <p className="text-sm">
                  A resent "invoice" email that looks exactly like one you received before, 
                  but with a malicious attachment instead of the original.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Quick Tips Card */}
      <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Security Checklist</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Always verify sender email addresses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Never share passwords or PINs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Use our scanner to check suspicious URLs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Report suspected phishing to authorities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Keep security software up to date</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Educate others about phishing risks</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProtectionTip({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-200">
      {icon}
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
