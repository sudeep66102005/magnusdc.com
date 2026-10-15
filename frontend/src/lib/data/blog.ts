export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  category: string;
  serviceSlug: string;
  published: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[] }[];
  references: { title: string; url: string }[];
}

// Source-based patient education. No individual medical reviewer is claimed.
export const blogArticles: BlogArticle[] = [
  {
    slug: "mri-scan-guide-koramangala",
    title: "MRI Scan in Koramangala: A Simple Patient Guide",
    description: "Learn what MRI scans show, why doctors request them and what to ask before your appointment at Clarus Magnus in Koramangala.",
    category: "MRI",
    serviceSlug: "mri",
    published: "2026-10-15",
    introduction: "An MRI referral can leave you with plenty of questions. Start by understanding what your doctor wants the scan to assess, rather than choosing a scan yourself.",
    sections: [
      {
        heading: "What does MRI do?",
        paragraphs: [
          "Magnetic resonance imaging uses a strong magnetic field and radio waves to create images inside the body. It does not use ionising radiation. Depending on the examination, it can show organs and soft tissues in detail and help doctors investigate or monitor a condition.",
          "The body part and clinical question determine the protocol. A scan of one area is not a check of the whole body, and a report must be considered alongside your symptoms and examination."
        ]
      },
      {
        heading: "What should you ask before booking?",
        paragraphs: [
          "Keep your referral ready. Ask which body part is being scanned, whether contrast is planned and whether any special preparation is needed. Mention implants and previous surgery during safety screening.",
          "Explore [MRI services at Clarus Magnus](/diagnostics/mri), then [contact the team](/contact) to confirm the instructions for your prescribed examination."
        ]
      },
      {
        heading: "Does MRI replace a consultation?",
        paragraphs: [
          "No. Your clinician uses the scan to answer a medical question and decide what the findings mean for your care. Arrange the follow-up appointment when you book the scan so you know who will explain your report."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: Body MRI",
        url: "https://www.radiologyinfo.org/en/info/bodymr"
      }
    ]
  },
  {
    slug: "mri-scan-preparation",
    title: "How to Prepare for an MRI Scan: Your Checklist",
    description: "An MRI preparation checklist covering food, medicines, clothing, implants and anxiety. Follow the instructions for your specific examination.",
    category: "MRI",
    serviceSlug: "mri",
    published: "2026-10-15",
    introduction: "Preparing for MRI is easier when you have instructions for your exact examination. Avoid copying the fasting advice given to a friend whose scan may have been different.",
    sections: [
      {
        heading: "Check food and medicine instructions",
        paragraphs: [
          "Eating and drinking requirements vary. Ask the imaging centre what applies to you, and do not stop prescribed medicines unless your healthcare team instructs you to do so. Mention diabetes or other conditions that may affect preparation."
        ]
      },
      {
        heading: "Tell the team before you arrive",
        paragraphs: [
          "Report implants, medical devices, metal fragments, previous operations and possible pregnancy. Bring relevant device records. If you are anxious in enclosed spaces, discuss this in advance rather than waiting until you enter the scanner."
        ]
      },
      {
        heading: "What should you bring and wear?",
        paragraphs: [
          "Bring your referral and relevant previous imaging. Follow instructions about clothing, jewellery, electronic devices and removable accessories. Staff may ask you to change into a gown to avoid unsuitable materials entering the scan room.",
          "Read about [Magnus MRI services](/diagnostics/mri) and [ask the team about preparation](/contact) before your visit."
        ]
      },
      {
        heading: "Is fasting always necessary?",
        paragraphs: [
          "No. The instructions depend on the examination and whether additional measures such as sedation are planned. Ask for clear written instructions and check anything you do not understand before the appointment day."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: Preparing for MRI",
        url: "https://www.radiologyinfo.org/en/info/how-to-prepare-for-mri-exam"
      }
    ]
  },
  {
    slug: "ct-scan-guide-koramangala",
    title: "CT Scan in Koramangala: A Patient Guide",
    description: "Understand how CT works, why it may be recommended and what to check before booking a CT scan at Clarus Magnus.",
    category: "CT",
    serviceSlug: "ct-scan",
    published: "2026-10-15",
    introduction: "Computed tomography, usually called CT, creates cross-sectional images using X-rays and computer processing. A doctor may request it when more detailed information is needed about structures inside the body.",
    sections: [
      {
        heading: "What can CT help assess?",
        paragraphs: [
          "Depending on the protocol, CT may help evaluate injuries, internal organs, infections, tumours or blood vessels. Different clinical questions require different scan areas and techniques. The wording on your referral helps the radiologist plan the examination."
        ]
      },
      {
        heading: "What happens during the scan?",
        paragraphs: [
          "You lie on a moving table that passes through a short, ring-shaped scanner. Staff may ask you to hold your breath briefly. Some examinations use contrast to highlight particular structures; others are performed without it.",
          "Because CT uses ionising radiation, the expected diagnostic benefit needs to justify the exposure. Tell the team if you are pregnant or might be pregnant."
        ]
      },
      {
        heading: "What should you confirm when booking?",
        paragraphs: [
          "Ask about the scan area, contrast, preparation and total appointment time. Keep previous reports available for comparison where relevant.",
          "Explore [CT services at Clarus Magnus](/diagnostics/ct-scan) and [contact the team](/contact) with your referral. If you are unsure whether your doctor requested CT or [MRI](/diagnostics/mri), clarify this before arranging the examination rather than substituting one test yourself."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: Body CT",
        url: "https://www.radiologyinfo.org/en/info/bodyct"
      }
    ]
  },
  {
    slug: "ct-scan-preparation-checklist",
    title: "CT Scan Preparation: Food, Medicines and Contrast Checks",
    description: "Prepare for CT with questions about fasting, medicines, allergies, pregnancy and contrast. Follow your centre’s individual instructions.",
    category: "CT",
    serviceSlug: "ct-scan",
    published: "2026-10-15",
    introduction: "The best preparation for CT starts with the correct booking details. A plain scan and a contrast-enhanced examination may have different instructions.",
    sections: [
      {
        heading: "Check your instructions early",
        paragraphs: [
          "Ask whether you need to avoid food or drink and for how long. Do not assume all CT scans require the same fasting period. Tell the team about your medicines, allergies, recent illness and possible pregnancy.",
          "If you have previously reacted to contrast, report what happened before the appointment. The radiology team may need to review your history and arrange a specific plan. Do not take preventive medicines on your own."
        ]
      },
      {
        heading: "What should you bring?",
        paragraphs: [
          "Bring your referral, relevant previous imaging and any test results requested by the centre. Wear comfortable clothing and follow instructions about removing jewellery or metal items near the area being scanned."
        ]
      },
      {
        heading: "What if the preparation is unclear?",
        paragraphs: [
          "Call before you travel. Explain the exact scan written on your referral and ask whether contrast or additional preparation is planned.",
          "Find [CT scan information at Magnus](/diagnostics/ct-scan) or [contact the booking team](/contact) for instructions specific to your examination.",
          "Keep a short checklist on your phone: arrival time, food and drink advice, documents, medicines to discuss and how you will receive the report. This makes it easier to confirm every detail in one conversation."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: Preparing for CT",
        url: "https://www.radiologyinfo.org/en/info/how-to-prepare-your-ct-exam"
      }
    ]
  },
  {
    slug: "ultrasound-scan-guide-koramangala",
    title: "Ultrasound Scan in Koramangala: What Patients Should Know",
    description: "A simple guide to ultrasound, how it works, common uses and the questions to ask before an appointment at Clarus Magnus.",
    category: "Ultrasound",
    serviceSlug: "ultrasound",
    published: "2026-10-15",
    introduction: "Ultrasound, also called sonography, uses sound waves to create images. It does not use ionising radiation and can show structures moving in real time.",
    sections: [
      {
        heading: "What can ultrasound examine?",
        paragraphs: [
          "Doctors use ultrasound for many purposes, including assessing selected abdominal organs, pelvic structures and superficial tissues. Doppler techniques can evaluate blood flow. The appropriate examination depends on the clinical question."
        ]
      },
      {
        heading: "What happens during a typical external scan?",
        paragraphs: [
          "Gel is applied to the skin and a probe is moved over the area. You may be asked to change position or briefly hold your breath. The pressure can feel uncomfortable if the area is tender; tell the clinician performing the examination.",
          "Ultrasound has limitations. Air, bone and other factors can restrict what can be seen, so another investigation may sometimes be needed."
        ]
      },
      {
        heading: "Is every ultrasound prepared in the same way?",
        paragraphs: [
          "No. Preparation depends on the area and technique. Ask what applies to the exact scan on your referral.",
          "Explore [ultrasound services at Clarus Magnus](/diagnostics/ultrasound), or see [Doppler imaging](/diagnostics/doppler) if this is specified by your doctor. When arranging your appointment, use the full examination name so the booking team can give the appropriate instructions and avoid confusion between different scan types."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: General Ultrasound",
        url: "https://www.radiologyinfo.org/en/info/genus"
      }
    ]
  },
  {
    slug: "ultrasound-preparation-fasting-full-bladder",
    title: "Ultrasound Preparation: Do You Need to Fast or Have a Full Bladder?",
    description: "Learn why ultrasound preparation varies, when fasting or a full bladder may be requested and what to confirm with your imaging centre.",
    category: "Ultrasound",
    serviceSlug: "ultrasound",
    published: "2026-10-15",
    introduction: "One ultrasound appointment may need fasting; another may need a full bladder. The difference comes from the body part and the approach used to examine it.",
    sections: [
      {
        heading: "Why might fasting be requested?",
        paragraphs: [
          "Some abdominal examinations have food and drink restrictions to improve the view of the structures being assessed. The centre should tell you the required interval and whether you may take medicines or small amounts of water."
        ]
      },
      {
        heading: "Why might a full bladder be needed?",
        paragraphs: [
          "Certain pelvic examinations use a filled bladder to help obtain images. Other approaches have different requirements. Ask how much to drink, when to drink it and whether you should avoid passing urine before the scan."
        ]
      },
      {
        heading: "What if you have a medical condition?",
        paragraphs: [
          "Tell the team if you have diabetes, a fluid restriction or difficulty holding urine. Do not force a generic preparation routine when it conflicts with your medical advice.",
          "Read about [ultrasound at Magnus](/diagnostics/ultrasound) and [contact the team](/contact) for the instructions linked to your referral.",
          "Before travelling, confirm three things: the exact scan name, your food and drink instructions and the arrival time. If you could not complete the preparation, call and explain rather than guessing whether to cancel or proceed."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: Preparing for Ultrasound",
        url: "https://www.radiologyinfo.org/en/info/how-to-prepare-for-us-exam"
      }
    ]
  },
  {
    slug: "x-ray-guide-koramangala",
    title: "X-Ray in Koramangala: What to Expect at Your Appointment",
    description: "Learn how an X-ray works, what to bring and what happens before and after a routine examination at Clarus Magnus.",
    category: "X-ray",
    serviceSlug: "x-ray",
    published: "2026-10-15",
    introduction: "An X-ray is an imaging test that can help doctors assess structures inside the body. The area examined and the views requested depend on the clinical question.",
    sections: [
      {
        heading: "What happens during the examination?",
        paragraphs: [
          "You may stand, sit or lie down while the technologist positions you. Staying still helps produce a clear image. You may need more than one view, and staff may ask you to hold your breath briefly for some examinations."
        ]
      },
      {
        heading: "How should you prepare?",
        paragraphs: [
          "Many routine X-rays need little preparation. You may need to remove clothing or jewellery that could interfere with the images. Tell the team if you are pregnant or might be pregnant, and follow any instructions specific to your examination."
        ]
      },
      {
        heading: "Does an X-ray hurt?",
        paragraphs: [
          "The imaging itself is not usually painful, but positioning an injured area may be uncomfortable. Tell the technologist about pain or movement restrictions before positioning starts.",
          "Afterwards, the images are reviewed and a report is prepared. Ask when the result will be available and who will explain it.",
          "Explore [X-ray services at Clarus Magnus](/diagnostics/x-ray) and [contact the centre](/contact) with your referral. Confirm the body part, side and requested views when booking, and bring relevant previous images if you have been asked to do so."
        ]
      }
    ],
    references: [
      {
        title: "NHS: X-Ray",
        url: "https://www.nhs.uk/tests-and-treatments/x-ray/"
      }
    ]
  },
  {
    slug: "chest-x-ray-guide",
    title: "Chest X-Ray: What It Can Show and Its Limitations",
    description: "Learn why chest X-rays are requested, what they can assess and why a normal result does not rule out every chest condition.",
    category: "X-ray",
    serviceSlug: "x-ray",
    published: "2026-10-15",
    introduction: "A chest X-ray is commonly used to assess the lungs and other structures in the chest. Your doctor decides whether it is appropriate based on your symptoms and examination.",
    sections: [
      {
        heading: "What can it help assess?",
        paragraphs: [
          "Chest X-rays may help identify changes associated with pneumonia, fluid around the lungs, heart enlargement and certain other chest problems. They also show some bones in the chest.",
          "However, a chest X-ray has limitations. It cannot exclude every cause of breathlessness or chest pain, and some abnormalities need another test for assessment."
        ]
      },
      {
        heading: "What happens during the examination?",
        paragraphs: [
          "You are positioned against the imaging equipment and may be asked to take a deep breath and hold still briefly. More than one view may be requested. Tell staff if you cannot stand comfortably or follow breath-holding instructions."
        ]
      },
      {
        heading: "Do you need to fast?",
        paragraphs: [
          "A routine chest X-ray generally requires no special preparation. Remove items as instructed and tell staff about possible pregnancy before imaging.",
          "See [Magnus X-ray services](/diagnostics/x-ray). If your clinician has requested further imaging, [CT services](/diagnostics/ct-scan) are a separate examination with a different protocol. Bring your referral and arrange a clinical review of the result rather than using the scan alone to decide whether treatment is needed."
        ]
      }
    ],
    references: [
      {
        title: "RadiologyInfo: Chest X-Ray",
        url: "https://www.radiologyinfo.org/en/info/chestrad"
      }
    ]
  }
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
