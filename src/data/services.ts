import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ocenovani',
    title: 'Oceňování nemovitostí',
    shortDescription: 'Přesné tržní odhady od autorizované odhadkyně',
    description: 'Poskytujeme profesionální oceňování nemovitostí s důrazem na přesnost a objektivitu. Naše odhadkyně Michaela Hudská disponuje oficiálním živnostenským oprávněním "Oceňování majetku pro věci movité i nemovité".',
    icon: 'Calculator',
    features: [
      'Tržní odhady pro prodej/koupi nemovitostí',
      'Úřední znalecké posudky s právní platností',
      'Oceňování pro hypoteční účely',
      'Oceňování pro dědické řízení a správní řízení',
      'Komplexní analýza místního trhu',
      'Rychlé zpracování do 5 pracovních dnů',
    ],
    process: [
      {
        step: 1,
        title: 'Objednání služby',
        description: 'Kontaktujte nás telefonicky nebo prostřednictvím formuláře',
      },
      {
        step: 2,
        title: 'Osobní návštěva',
        description: 'Provedeme důkladnou prohlídku a fotodokumentaci nemovitosti',
      },
      {
        step: 3,
        title: 'Analýza a zpracování',
        description: 'Analyzujeme místní trh a podobné nemovitosti',
      },
      {
        step: 4,
        title: 'Předání posudku',
        description: 'Obdržíte detailní písemný posudek s odůvodněním',
      },
    ],
    price: 'Cena bude doplněna',
    duration: 'Doba zpracování bude doplněna',
  },
  {
    id: 'zprostredkovani',
    title: 'Zprostředkování prodeje a koupě nemovitostí',
    shortDescription: 'Kompletní servis pro prodej i koupě nemovitostí',
    description: 'Zajistíme kompletní zprostředkování prodeje i koupě nemovitostí s maximální péčí a profesionalitou. Od přípravy nemovitosti k prodeji, přes vyhledávání vhodné nemovitosti k nákupu, až po úspěšný převod vlastnictví.',
    icon: 'Home',
    features: [
      'Příprava nemovitosti k prodeji - home staging a drobné úpravy',
      'Profesionální fotografie a video dokumentace',
      '3D virtuální prohlídky nemovitosti',
      'Inzerce na všech významných realitních portálech',
      'Aktivní marketing na sociálních sítích',
      'Aktivní vyhledávání vhodných nemovitostí k nákupu',
      'Přístup k exkluzivním nabídkám mimo veřejnou inzerci',
      'Organizace a vedení prohlídek s potenciálními kupci i prodávajícími',
      'Právní kontrola veškeré dokumentace',
      'Asistence při vyjednávání ceny a podmínek',
      'Pomoc s hypotečním financováním',
      'Bezpečný převod vlastnictví u notáře',
    ],
    process: [
      {
        step: 1,
        title: 'Úvodní konzultace',
        description: 'Prohlídka nemovitosti k prodeji nebo definice požadavků k nákupu',
      },
      {
        step: 2,
        title: 'Příprava a vyhledávání',
        description: 'Marketing prodeje nebo aktivní vyhledávání vhodných nemovitostí k nákupu',
      },
      {
        step: 3,
        title: 'Prohlídky',
        description: 'Organizace a vedení prohlídek s vybranými zájemci',
      },
      {
        step: 4,
        title: 'Due diligence',
        description: 'Právní kontrola a ověření stavu nemovitosti',
      },
      {
        step: 5,
        title: 'Vyjednávání a realizace',
        description: 'Vyjednávání podmínek, financování a převod vlastnictví',
      },
    ],
  },
  {
    id: 'sprava',
    title: 'Správa nemovitostí',
    shortDescription: 'Bezstarostný pronájem s plným servisem',
    description: 'Komplexní správa vašich pronajatých nemovitostí. Postaráme se o vše potřebné, abyste mohli mít z pronájmu příjem bez starostí.',
    icon: 'Settings',
    features: [
      'Hledání a výběr kvalitních nájemníků',
      'Právní kontrola a příprava nájemních smluv',
      'Pravidelné kontroly stavu nemovitosti',
      'Kompletní reporty pro vlastníky',
      'Správa oprav a údržby',
      'Koordinace s řemeslníky',
      'Vyúčtování služeb a energií',
      'Právní podpora při sporech s nájemníky',
      'Finanční účetnictví nájmů a výdajů',
    ],
    process: [
      {
        step: 1,
        title: 'Převzetí správy',
        description: 'Prohlídka nemovitosti a nastavení podmínek správy',
      },
      {
        step: 2,
        title: 'Hledání nájemníků',
        description: 'Marketing, výběr a prověření vhodných nájemníků',
      },
      {
        step: 3,
        title: 'Uzavření smlouvy',
        description: 'Příprava a podpis nájemní smlouvy, předání nemovitosti',
      },
      {
        step: 4,
        title: 'Běžná správa',
        description: 'Pravidelné kontroly, správa oprav, vyúčtování',
      },
      {
        step: 5,
        title: 'Reporting',
        description: 'Pravidelné reporty o stavu nemovitosti a financích',
      },
    ],
  },
  {
    id: 'poradenstvi',
    title: 'Realitní poradenství',
    shortDescription: 'Odborné poradenství v oblasti nemovitostí',
    description: 'Poskytujeme profesionální poradenství v oblasti investic do nemovitostí, analýzy trhu a strategického plánování.',
    icon: 'MessageSquare',
    features: [
      'Investiční strategie v nemovitostech',
      'Analýzy místního realitního trhu',
      'Doporučení pro zvýšení hodnoty nemovitosti',
      'Právní poradenství v oblasti realit',
      'Pomoc s hypoteční problematikou',
      'Konzultace k rekonstrukcím a úpravám',
      'Poradenství při dědictví nemovitostí',
      'Optimalizace daní z nemovitostí',
    ],
    process: [
      {
        step: 1,
        title: 'Úvodní konzultace',
        description: 'Zjištění vašich potřeb a cílů',
      },
      {
        step: 2,
        title: 'Analýza situace',
        description: 'Důkladná analýza vaší situace a možností',
      },
      {
        step: 3,
        title: 'Návrh řešení',
        description: 'Příprava doporučení a strategického plánu',
      },
      {
        step: 4,
        title: 'Implementace',
        description: 'Asistence při realizaci navržených řešení',
      },
    ],
  },
]

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}

