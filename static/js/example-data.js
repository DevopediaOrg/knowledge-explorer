const MOCK_DATA = [
  {
    title: "Example One",
    url: "https://devopedia.org/example-one",
    authors: ["jsmith", "ryadav"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["Another Article Title", "One More Article Title"]
  },
  {
    title: "BBBBB",
    url: "https://devopedia.org/example-one",
    authors: ["jsmith", "ryadav"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["RBQBD", "XBYBN", "TBKBH", "AASAA"]
  },

  {
    title: "RBQBD",
    url: "https://devopedia.org/example-one",
    authors: ["jsmith", "ryadav"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["BBBBB", "ZBWBJ", "IBLBA", "DCBDC"]
  },

  {
    title: "ZBWBJ",
    url: "https://devopedia.org/example-one",
    authors: ["jsmith", "ryadav"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["IBLBA", "XBYBN", "QBOBD", "QACAR"]
  },

  {
    title: "TBKBH",
    url: "https://devopedia.org/example-one",
    authors: ["jsmith", "ryadav"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["ZBWBJ", "XBYBN", "RBQBD", "BCBBC"]
  },

  {
    title: "IBLBA",
    url: "https://devopedia.org/example-one",
    authors: ["jsmith", "ryadav"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["BBBBB", "TBKBH", "ZBWBJ", "ACDCE"]
  },
  {
    title: "CCCCC",
    url: "https://devopedia.org/image-net",
    authors: ["arvindpdmn", "sleepingDragon"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["ACBAC", "BCBBC", "DCBDC", "RBQBD"]
  },
  {
    title: "ACBAC",
    url: "https://devopedia.org/image-net",
    authors: ["arvindpdmn", "sleepingDragon"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["CCCCC", "ACDCE", "DCBDC", "QACAR"]
  },
  {
    title: "ACDCE",
    url: "https://devopedia.org/image-net",
    authors: ["arvindpdmn", "sleepingDragon"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["ACBAC", "BCBBC", "DCBDC", "AAAAA"]
  },
  {
    title: "BCBBC",
    url: "https://devopedia.org/image-net",
    authors: ["arvindpdmn", "sleepingDragon"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["CCCCC", "VCVCV", "DCBDC", "ZBWBJ"]
  },
  {
    title: "DCBDC",
    url: "https://devopedia.org/image-net",
    authors: ["arvindpdmn", "sleepingDragon"],
    publishedTime: "2019-09-21T12:20:44+00:00",
    modifiedTime: "2019-10-04T09:11:12+00:00",
    featuredImg: "https://devopedia.org/link-to-img",
    summary: "Summary of article appears here",
    discussion: [
      {
        question: "Some question here?",
        answer: "Some answer here"
      },
      {
        question: "Another question here?",
        answer: "Another answer here"
      }
    ],
    milestones: [
      {
        monthYear: "Jun 2009",
        description: "Some description here"
      }
    ],
    tags: ["some tag", "another tag"],
    seeAlso: ["XCXCX", "ZCZCZ", "GCGCG"]
  }
];
