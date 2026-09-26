import { QuizQuestion, WifeSummary } from './types';

export const HENRY_KEY_INFO = {
  name: 'Henry VIII',
  lifespan: '1491 – 1547 (aged 55)',
  reign: '1509 – 1547 (38 years)',
  dynasty: 'House of Tudor',
  accession: 'At age 17 (1509)',
  predecessor: 'Henry VII (father)',
  successor: 'Edward VI (son)',
  summary:
    'Henry VIII became King of England at age 17 and ruled for 38 years. He is famous for having six wives, breaking away from the Catholic Church, and desperately seeking a son to continue the Tudor royal line.',
  keyFacts: [
    {
      id: 'youth',
      title: 'Young & Athletic',
      detail:
        'As a young king, Henry was tall, athletic, and loved sports and music. He spoke several languages, hunted, jousting, and composed songs.',
    },
    {
      id: 'reformation',
      title: 'Broke with the Church',
      detail:
        'When the Pope refused to grant him a divorce from his first wife, Henry broke away from Rome and made himself the head of the Church of England.',
    },
    {
      id: 'navy',
      title: 'Built the Navy',
      detail:
        'Henry grew England’s war fleet from just 5 ships to over 40 vessels, including his famous flagship, the Mary Rose.',
    },
    {
      id: 'health',
      title: 'Injuries & Health',
      detail:
        'A bad jousting accident in 1536 badly injured his legs. Severe pain and limited movement caused heavy weight gain and made him much harsher.',
    },
  ],
};

export const INFO_SECTIONS = {
  title: 'Henry VIII and his six wives',
  sections: [
    {
      id: 'who-they-were',
      heading: 'Who They Were & Why He Married Them',
      content:
        'Henry VIII had six wives—Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, and Catherine Parr—as he desperately wanted a son to secure his crown. He married Catherine of Aragon for a Spanish alliance, and chose others for love, heirs, or political partnerships.',
    },
    {
      id: 'what-happened',
      heading: 'What Happened to Them',
      content:
        'Their fates follow the famous rhyme: "divorced, beheaded, died, divorced, beheaded, survived." Catherine of Aragon and Anne of Cleves had their marriages voided because Henry wanted new alliances or different wives; Anne Boleyn and Catherine Howard were executed/beheaded for treason; Jane Seymour died shortly after giving birth to Prince Edward because of postnatal complications; and Catherine Parr outlived the king.',
    },
    {
      id: 'why-these-fates',
      heading: 'Why These Fates Occurred',
      content:
        'Queens faced extreme danger if they failed to produce a male heir or lost political favor. Because Henry held absolute power and court rivals constantly plotted against the queens, he used the law or execution to reset his marriages whenever they failed him politically or personally.',
    },
    {
      id: 'historical-summary',
      heading: 'Summary',
      content:
        "That is why Henry VIII's legacy is about much more than just his six wives—his reign permanently transformed English religion, politics, and the future of the British crown, driven by his ruthless decisions to void marriages for political shifts, behead queens for treason, and face tragic losses when wives died giving him the heirs he craved.",
    },
  ],
};

export const SIX_WIVES_FATES: WifeSummary[] = [
  {
    name: 'Catherine of Aragon',
    order: 1,
    fate: 'Divorced',
    detail: 'Marriage annulled/voided after 24 years to pursue an heir and new alliance.',
  },
  {
    name: 'Anne Boleyn',
    order: 2,
    fate: 'Beheaded',
    detail: 'Mother of Queen Elizabeth I; accused of treason and executed at the Tower of London.',
  },
  {
    name: 'Jane Seymour',
    order: 3,
    fate: 'Died',
    detail: 'Gave birth to male heir Prince Edward, but tragically passed away shortly after from postnatal complications.',
  },
  {
    name: 'Anne of Cleves',
    order: 4,
    fate: 'Divorced',
    detail: 'Political match quickly annulled; remained friendly as the "King\'s Beloved Sister".',
  },
  {
    name: 'Catherine Howard',
    order: 5,
    fate: 'Beheaded',
    detail: 'Young queen executed for treason after allegations of prior and extramarital relations.',
  },
  {
    name: 'Catherine Parr',
    order: 6,
    fate: 'Survived',
    detail: 'Educated reformer and peacemaker who safely outlived King Henry VIII.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Did Henry VIII have six wives primarily because he wanted a son to secure his crown?',
    correctAnswer: true,
    explanation: 'Henry desperately sought a legitimate male heir to secure the Tudor succession and crown.',
  },
  {
    id: 2,
    question: 'Did Jane Seymour outlive the king?',
    correctAnswer: false,
    explanation: 'Jane Seymour died shortly after giving birth to Prince Edward from postnatal complications. Only Catherine Parr outlived the king.',
  },
  {
    id: 3,
    question: "Did court rivals and Henry's need for political or personal success influence the fates of his queens?",
    correctAnswer: true,
    explanation: "Court intrigue, shifting political alliances, and Henry's unchecked power were critical factors in their fates.",
  },
  {
    id: 4,
    question: 'Were Anne Boleyn and Catherine Howard beheaded after being accused of treason?',
    correctAnswer: true,
    explanation: 'Both queens were condemned on charges of treason and executed.',
  },
  {
    id: 5,
    question: 'Did Henry void marriages (divorce) and cause queens to die or be beheaded based on his pursuit of political shifts and heirs?',
    correctAnswer: true,
    explanation: 'His relentless pursuit of male heirs and shifting alliances drove divorces, executions, and turmoil.',
  },
];
