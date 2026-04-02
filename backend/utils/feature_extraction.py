import re
import math
from urllib.parse import urlparse
import tldextract

def entropy(domain):
    prob = [float(domain.count(c)) / len(domain) for c in set(domain)]
    return -sum([p * math.log(p, 2) for p in prob]) if domain else 0

def has_ip(url):
    return 1 if re.search(r'(\d{1,3}\.){3}\d{1,3}', url) else 0

def extract_features(url):
    features = []

    # Normalize
    url = url.strip()
    url_lower = url.lower()

    # Parse safely
    parsed = urlparse(url if url.startswith("http") else "http://" + url)
    domain_info = tldextract.extract(url)
    domain = domain_info.domain + "." + domain_info.suffix
    path = parsed.path if parsed.path else ""

    # 1. length_url
    features.append(len(url))

    # 2. nb_www
    features.append(url_lower.count("www"))

    # 3. ratio_digits_url
    digits = sum(c.isdigit() for c in url)
    features.append(digits / len(url) if len(url) > 0 else 0)

    # 4. longest_words_raw
    words = re.split(r'[./\-]', url)
    features.append(max([len(w) for w in words]) if words else 0)

    # 5. longest_word_path
    path_words = re.split(r'[./\-]', path)
    features.append(max([len(w) for w in path_words]) if path_words else 0)

    # 6. phish_hints
    hints = ['login', 'secure', 'bank', 'verify', 'update']
    features.append(sum(1 for h in hints if h in url_lower))

    # 7. nb_dots
    features.append(url.count('.'))

    # 8. nb_hyphens
    features.append(url.count('-'))

    # 9. https_token
    features.append(1 if parsed.scheme == "https" else 0)

    # 10. prefix_suffix (hyphen in domain)
    features.append(1 if '-' in domain else 0)

    return features
print(extract_features("https://secure-login-bank.com/update"))
print(len(extract_features("google.com")))