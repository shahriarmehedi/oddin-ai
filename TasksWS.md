# **OddinAI ⚡**

## **⚡ OddinAI -- Complete Landing Page Specification (OddsJam Style)**

## **0. Introduction**

**Tagline (Hero pre-header):**

> Change the way you play --- forever.

**Mission:\
** OddinAI is a real-time sports analysis platform powered by artificial
intelligence.\
It analyzes millions of data points, detects hidden patterns, and
identifies the best opportunities --- before anyone else.

The website must reflect **precision, confidence, and energy**, through
a **dark, fluid, high-contrast SaaS-style design** inspired by
**OddsJam**, **Revolut**, and **Figma**.\
Animations should feel **smart, smooth, and data-driven** --- never
gimmicky.

**Primary color palette:**

-   Background: #0A0E18

-   Blue: #1E88E5

-   Neon Green: #00E676

-   Accent Orange: #FFA726

-   Text: White / 75% gray

-   Font: Inter

## **1. Hero Section**

**Displayed text (French):**

Si l'on veut gagner sa vie, il suffit de travailler.

Mais si l'on veut devenir riche, il faut trouver autre chose.

La première application IA qui combine l'analyse de données en direct,

les cotes en temps réel et les statistiques live.

→ Tester gratuitement

**Design & Motion (developer notes):**

-   Layout: Left (headline, subtext, CTA), Right (iPhone 15 Pro mockup
    \> with live notifications).

-   Background: Radial blue-green halo with slow parallax motion.

-   Animation sequence:

    1.  Title fades up sequentially.

    2.  CTA scales in with glow loop (box-shadow: 0 0 40px \>
        rgba(0,230,118,0.4)).

    3.  iPhone mockup floats (rotateY(5deg) oscillation).

    4.  Notifications (\"Safe Bet\", \"Value Bet\", \"Momentum\") cycle
        \> every 6s.

-   On scroll: Hero compresses slightly, iPhone scales down.

-   CTA: Placeholder Telegram link. Hover glow intensifies.

**Mobile:\
** Stacked layout, iPhone centered below CTA, reduced halo glow for
performance.

## **2. Section -- "L'IA en temps réel"**

**French text:**

Des milliers de données.

Une seule logique : celle du moment présent.

OddinAI observe en direct les cotes, les tendances et les statistiques.

Chaque seconde, notre IA réévalue les probabilités et détecte les
opportunités avant tout le monde.

**Design:**

-   Animated data stream (numbers + particles moving horizontally).

-   Background: low-opacity numeric lines with blur.

-   Hover on "cotes", "tendances", "probabilités" = pulse highlight.

**Animations:\
** Fade-up on scroll; continuous data motion; parallax background depth.

## **3. Section -- "Les chiffres parlent"**

**French text:**

24 700 matchs analysés

58 098 alertes envoyées

1 240 000 € de gains déclarés

**Design & Motion:**

-   3 circular counters (blue, orange, green).

-   Centered numbers, ring draws via SVG stroke-dasharray.

-   Count-up animation with delay (0.2s stagger).

-   Hover: ring glow + slight zoom (1.03x).

-   Mobile: stacked vertically.

## **4. Section -- "Le Simulateur de Gains"**

**French text:**

Et si vous aviez suivi nos signaux depuis le début ?

Découvrez le potentiel réel de vos décisions.

Ajustez le montant, la cote et la stratégie,

et laissez l'IA vous montrer ce que vous auriez gagné.

**Concept:\
** Interactive gain simulator showing **compound growth** based on
realistic betting logic.

**Fixed parameters:**

-   Win rate: 66%

-   Average odds: 1.62

-   Stake: 7% per bet (compounded)

**Formula:\
** Expected ROI per bet = WR × (odds - 1) - (1 - WR)\
→ With WR = 0.66, odds = 1.62 → r ≈ 0.0692 (6.92%)\
Bankroll compounds by (1 + stake \* r)\^N.

**Default example:\
** 1000 € starting balance, 30 days, 1 bet/day = +470 € (≈ +47 %).

**UI:**

-   Sliders: Capital (100--10 000 €), Duration (1 w--12 m), Bets/day \>
    (0.5--5).

-   Animated line chart (green area fill).

-   Curve morphs smoothly when sliders move.

-   Particle burst when new peak reached.

-   Counters animate to new value.

-   Tooltip shows gain percentage.

-   Debounce 120 ms for responsiveness.

**Accessibility:\
** aria-label sliders, live updates via aria-live=\"polite\".

## **5. Section -- "Pourquoi OddinAI ?"**

**French text:**

Pourquoi choisir OddinAI ?

→ Intelligence Adaptative

L'IA apprend de chaque match, de chaque écart et de chaque résultat.

→ Données Vérifiées

Toutes les analyses proviennent de sources officielles et d'historiques
réels.

→ Alertes Instantanées

Recevez les signaux avant les changements de cotes.

→ Décisions Renforcées

Une vision logique, sans émotion --- mais toujours humaine.

**Design:**

-   4 feature cards with icons (AI, DB, Notification, Logic).

-   Neon gradient border (hover glow).

-   Fade-up staggered entry.

-   Icons float subtly.

-   Mobile = carousel swipe.

## **6. Section -- "Plans et Tarifs"**

**French text:**

Choisissez votre façon de gagner.

Starter --- Pour débuter en toute simplicité

Pro --- L'expérience complète (recommandé)

Elite --- Pour les plus ambitieux

VIP --- Sur mesure, avec alertes exclusives

→ Commencer

**Design:**

-   4 pricing cards.

-   "Pro" ribbon marked "RECOMMANDÉ".

-   Animated toggle (Mensuel/Annuel).

-   Count-up on prices.

-   Hover = glowing pulse.

-   All prices in euros.

**Example:\
** Starter: 29 €/mois\
Pro: 49 €/mois\
Elite: 99 €/mois\
VIP: Sur demande

## **7. Section -- "Ce qu'ils en disent"**

**French text:**

★★★★★

"L'analyse est bluffante, les alertes arrivent avant les autres sites."
--- Adrien M.

★★★★★

"Enfin une IA qui fait plus que des stats : elle comprend le jeu." ---
Julien R.

★★★★★

"Je ne parie plus pareil depuis OddinAI." --- Marc T.

**Design:**

-   Auto carousel with drag.

-   Card fade-slide animation.

-   Star sparkle opacity loop.

-   Neon ring on avatars.

-   Scroll snap mobile.

## **8. Section -- "Questions fréquentes"**

**French text:**

OddinAI est-il compatible avec tous les sports ?

→ Oui, football, tennis et basket sont déjà couverts.

L'IA se met-elle à jour en direct ?

→ Oui, elle analyse en continu les cotes et tendances du marché.

Peut-on essayer gratuitement ?

→ Oui, cliquez sur "Tester gratuitement" pour rejoindre le canal
Telegram.

Mes données sont-elles sécurisées ?

→ Absolument. Aucune donnée personnelle n'est partagée.

**Design:**

-   Accordion cards, height animation.

-   Chevron rotation 0°→90°.

-   Neon flash (0.2 s) on open.

-   Accessible keyboard nav.

## **9. Section -- "À propos"**

**French text:**

OddinAI est développé par une équipe passionnée de sport, de logique et
de technologie.

Notre mission : rendre l'analyse intelligente accessible à tous.

Nous croyons que la performance ne dépend pas du hasard,

mais de la compréhension --- et de l'adaptation.

**Design:**

-   Centered text.

-   Fade-up sequential paragraphs.

-   Floating particles background.

-   CTA "Rejoindre la communauté".

## **10. Section -- "À venir"**

**French text:**

Bientôt sur OddinAI :

→ Multi-sports (Formule 1, eSports, NBA)

→ Module prédictif IA V2

→ API publique

→ Application mobile (iOS / Android)

**Design:**

-   Vertical timeline with glowing dots.

-   Draw animation for line.

-   Sequential fade-in items.

## **11. Footer**

**French text:**

© 2025 OddinAI. Tous droits réservés.

Jeu responsable • Mentions légales • Conditions générales

Changer de langue \| €

**Design:**

-   Minimal dark footer.

-   Center logo ⚡ glow pulse.

-   Fade-in upward.

-   Hover underline animation.

## **12. Global Animations & Micro-interactions**

  ------------------------------------------------------------------------
  **Element**    **Animation**           **Duration**   **Detail**
  -------------- ----------------------- -------------- ------------------
  Hero           Fade-up + float         0.3--0.5s      Parallax halo

  Data flow      TranslateX + blur       continuous     background loop

  Counters       Stroke draw + count-up  1.2s           cubic ease

  Simulator      Curve morph             dynamic        updates with input

  Pricing        Staggered rise          0.4s           glow border

  Testimonials   Carousel                6s loop        smooth snap

  FAQ            Expand + rotate         0.4s           spring easing

  Roadmap        Line draw + fade        0.6s delay     sequential reveal
  ------------------------------------------------------------------------

Global:

-   Smooth scroll (Lenis or Framer).

-   Parallax halos.

-   Cursor glow zones.

-   IntersectionObserver for reveals.

## **13. Responsible Gaming & Legal**

**Text (footer microtext):**

> OddinAI n'est pas un site de pari.\
> Les analyses fournies ne garantissent aucun gain.\
> Jouez de manière responsable.

**Design:**

-   Small line below footer links, opacity 0.6.

-   Static link to "Aide au jeu responsable".

-   No animation.

**Compliance:**

-   GDPR-compliant.

-   No tracking without consent.

-   Cookie banner optional (analytics only).

## **14. Technical & Performance**

-   Stack: Next.js 14 + Tailwind + Framer Motion

-   Font: Inter

-   Animations: GPU (transform, opacity)

-   Targets: Lighthouse ≥ 90 mobile, CLS \< 0.05, TTI \< 2 s

-   SEO: \<h1\> in Hero, meta tags, OG image

-   Responsive breakpoints: 360 / 768 / 1024 / 1440 px

-   No CDNs --- use local assets (WebP / AVIF)

## **15. Deliverables Checklist**

1.  Full Next.js project (Hero → Footer).

2.  Animations and responsive behavior implemented.

3.  CTA linked to placeholder Telegram.

4.  Folder structure: /components, /assets, /styles.

5.  Domain-ready deployment setup.

6.  GitHub or ZIP delivery.

7.  README explaining edits (text / pricing / colors).

8.  Tested Chrome, Safari, Edge, iOS, Android.

9.  Lighthouse report ≥ 90.

10. Include favicon + OG image.

## **16. Closing Tagline**

> OddinAI. Là où la logique rencontre la performance.\
> ⚡ Powered by data. Driven by instinct.
