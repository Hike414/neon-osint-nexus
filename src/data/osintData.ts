
export interface OsintTool {
  id: string;
  name: string;
  url?: string;
  type?: 'T' | 'D' | 'R' | 'M';
  children?: OsintTool[];
}

export const osintData: OsintTool = {
  id: "root",
  name: "OSINT Framework",
  children: [
    {
      id: "username",
      name: "Username Research",
      children: [
        {
          id: "usernameCheck",
          name: "Username Check Services",
          children: [
            { 
              id: "namechk", 
              name: "NameChk", 
              url: "https://namechk.com/" 
            },
            { 
              id: "whatsmyname", 
              name: "WhatsMyName", 
              url: "https://whatsmyname.app/",
              type: "T"
            },
            { 
              id: "namecheckup", 
              name: "NameCheckup", 
              url: "https://namecheckup.com/" 
            },
            { 
              id: "sherlock", 
              name: "Sherlock", 
              url: "https://github.com/sherlock-project/sherlock",
              type: "T" 
            }
          ]
        },
        {
          id: "emailSearch",
          name: "Email Search",
          children: [
            { 
              id: "hunter", 
              name: "Hunter.io", 
              url: "https://hunter.io/",
              type: "R" 
            },
            { 
              id: "emailrep", 
              name: "EmailRep", 
              url: "https://emailrep.io/" 
            }
          ]
        }
      ]
    },
    {
      id: "socialMedia",
      name: "Social Media",
      children: [
        {
          id: "facebook",
          name: "Facebook",
          children: [
            { 
              id: "fbgraphsearch", 
              name: "Facebook Graph Search", 
              url: "https://inteltechniques.com/osint/facebook.html" 
            },
            { 
              id: "fbstalkscan", 
              name: "StalkScan", 
              url: "https://stalkscan.com/" 
            }
          ]
        },
        {
          id: "twitter",
          name: "Twitter / X",
          children: [
            { 
              id: "twitteradvanced", 
              name: "Twitter Advanced Search", 
              url: "https://twitter.com/search-advanced" 
            },
            { 
              id: "tweetdeck", 
              name: "TweetDeck", 
              url: "https://tweetdeck.twitter.com/" 
            },
            { 
              id: "twitteranalytics", 
              name: "Social Bearing", 
              url: "https://socialbearing.com/" 
            },
            { 
              id: "twint", 
              name: "Twint", 
              url: "https://github.com/twintproject/twint",
              type: "T" 
            }
          ]
        },
        {
          id: "instagram",
          name: "Instagram",
          children: [
            { 
              id: "igstalk", 
              name: "Instagram Viewer", 
              url: "https://www.instagram.com/USERNAME/",
              type: "M"
            },
            { 
              id: "instaloader", 
              name: "Instaloader", 
              url: "https://github.com/instaloader/instaloader",
              type: "T"
            }
          ]
        },
        {
          id: "linkedin",
          name: "LinkedIn",
          children: [
            { 
              id: "linkedin_search", 
              name: "LinkedIn Advanced Search", 
              url: "https://www.linkedin.com/search/results/all/" 
            },
            { 
              id: "rocketreach", 
              name: "RocketReach", 
              url: "https://rocketreach.co/",
              type: "R"
            }
          ]
        }
      ]
    },
    {
      id: "domainResearch",
      name: "Domain Research",
      children: [
        {
          id: "whois",
          name: "WHOIS Records",
          children: [
            { 
              id: "whoisxmlapi", 
              name: "WHOIS Lookup", 
              url: "https://www.whoisxmlapi.com/whois-lookup.php" 
            },
            { 
              id: "domainbigdata", 
              name: "DomainBigData", 
              url: "https://domainbigdata.com/" 
            }
          ]
        },
        {
          id: "dnsRecords",
          name: "DNS Records",
          children: [
            { 
              id: "dnsdumpster", 
              name: "DNSdumpster", 
              url: "https://dnsdumpster.com/" 
            },
            { 
              id: "securitytrails", 
              name: "SecurityTrails", 
              url: "https://securitytrails.com/",
              type: "R" 
            }
          ]
        },
        {
          id: "websiteInfo",
          name: "Website Information",
          children: [
            { 
              id: "builtwith", 
              name: "BuiltWith", 
              url: "https://builtwith.com/" 
            },
            { 
              id: "wappalyzer", 
              name: "Wappalyzer", 
              url: "https://www.wappalyzer.com/",
              type: "T" 
            },
            { 
              id: "waybackmachine", 
              name: "Wayback Machine", 
              url: "https://web.archive.org/" 
            }
          ]
        }
      ]
    },
    {
      id: "peopleSearch",
      name: "People Search",
      children: [
        {
          id: "generalSearch",
          name: "General Search",
          children: [
            { 
              id: "pipl", 
              name: "Pipl", 
              url: "https://pipl.com/",
              type: "R" 
            },
            { 
              id: "spokeo", 
              name: "Spokeo", 
              url: "https://www.spokeo.com/" 
            }
          ]
        },
        {
          id: "publicRecords",
          name: "Public Records",
          children: [
            { 
              id: "searchpublicrecords", 
              name: "Search Public Records", 
              url: "https://www.searchpublicrecords.com/" 
            },
            { 
              id: "blackbookonline", 
              name: "Black Book Online", 
              url: "https://www.blackbookonline.info/" 
            }
          ]
        }
      ]
    },
    {
      id: "searchEngines",
      name: "Search Engines",
      children: [
        {
          id: "generalSearch",
          name: "General Search",
          children: [
            { 
              id: "google_dorks", 
              name: "Google Dorks", 
              url: "https://www.exploit-db.com/google-hacking-database",
              type: "D" 
            },
            { 
              id: "bing", 
              name: "Bing", 
              url: "https://www.bing.com/" 
            },
            { 
              id: "duckduckgo", 
              name: "DuckDuckGo", 
              url: "https://duckduckgo.com/" 
            }
          ]
        },
        {
          id: "metaSearch",
          name: "Meta Search",
          children: [
            { 
              id: "searx", 
              name: "SearX", 
              url: "https://searx.me/" 
            },
            { 
              id: "startpage", 
              name: "Startpage", 
              url: "https://www.startpage.com/" 
            }
          ]
        }
      ]
    },
    {
      id: "imageSearch",
      name: "Image Search & Analysis",
      children: [
        {
          id: "reverseImageSearch",
          name: "Reverse Image Search",
          children: [
            { 
              id: "tineye", 
              name: "TinEye", 
              url: "https://tineye.com/" 
            },
            { 
              id: "googleimages", 
              name: "Google Images", 
              url: "https://images.google.com/" 
            },
            { 
              id: "yandeximg", 
              name: "Yandex Images", 
              url: "https://yandex.com/images/" 
            }
          ]
        },
        {
          id: "imageMeta",
          name: "Image Metadata Viewers",
          children: [
            { 
              id: "exiftool", 
              name: "ExifTool", 
              url: "https://exiftool.org/",
              type: "T" 
            },
            { 
              id: "imagemetadata", 
              name: "Jeffrey's Image Metadata Viewer", 
              url: "http://exif.regex.info/exif.cgi" 
            }
          ]
        }
      ]
    },
    {
      id: "geolocation",
      name: "Geolocation",
      children: [
        {
          id: "ipLocators",
          name: "IP Locators",
          children: [
            { 
              id: "ipinfo", 
              name: "IPinfo", 
              url: "https://ipinfo.io/" 
            },
            { 
              id: "shodan", 
              name: "Shodan", 
              url: "https://www.shodan.io/",
              type: "R" 
            }
          ]
        },
        {
          id: "mapping",
          name: "Mapping Tools",
          children: [
            { 
              id: "googlemaps", 
              name: "Google Maps", 
              url: "https://www.google.com/maps" 
            },
            { 
              id: "openstreetmap", 
              name: "OpenStreetMap", 
              url: "https://www.openstreetmap.org/" 
            },
            { 
              id: "geoguesser", 
              name: "GeoGuessr", 
              url: "https://www.geoguessr.com/",
              type: "R" 
            }
          ]
        }
      ]
    }
  ]
};

export default osintData;
