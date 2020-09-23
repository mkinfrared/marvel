const heroesListMock = [
  {
    id: 1011334,
    name: "3-D Man",
    description: "",
    modified: "2014-04-29T14:18:17-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg"
    }
  },
  {
    id: 1009144,
    name: "A.I.M.",
    description:
      "AIM is a terrorist organization bent on destroying the world.",
    modified: "2013-10-17T14:41:30-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
      extension: "jpg"
    }
  }
];

const comicsMock = [
  {
    id: 27238,
    digitalId: 0,
    title: "Wolverine Saga (2009) #7",
    issueNumber: 7,
    variantDescription: "",
    description: null,
    modified: "-0001-11-30T00:00:00-0500",
    isbn: "",
    upc: "5960606814-00711",
    diamondCode: "",
    ean: "",
    issn: "",
    format: "Comic",
    pageCount: 32,
    textObjects: [],
    resourceURI: "http://gateway.marvel.com/v1/public/comics/27238",
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/issue/27238/wolverine_saga_2009_7?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      }
    ],
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/8086",
      name: "Wolverine Saga (2009)"
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: "onsaleDate",
        date: "2029-12-31T00:00:00-0500"
      },
      {
        type: "focDate",
        date: "2009-06-11T00:00:00-0400"
      }
    ],
    prices: [
      {
        type: "printPrice",
        price: 0
      }
    ],
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      extension: "jpg"
    },
    images: [],
    creators: {
      available: 1,
      collectionURI:
        "http://gateway.marvel.com/v1/public/comics/27238/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4430",
          name: "Jeff Youngquist",
          role: "editor"
        }
      ],
      returned: 1
    },
    characters: {
      available: 2,
      collectionURI:
        "http://gateway.marvel.com/v1/public/comics/27238/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
          name: "Iron Man"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009718",
          name: "Wolverine"
        }
      ],
      returned: 2
    },
    stories: {
      available: 2,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/27238/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/59792",
          name: "Cover #59792",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/59793",
          name: "Interior #59793",
          type: "interiorStory"
        }
      ],
      returned: 2
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/27238/events",
      items: [],
      returned: 0
    }
  },
  {
    id: 90052,
    digitalId: 0,
    title: "Tales of Suspense Facsimile Edition (2020) #39",
    issueNumber: 39,
    variantDescription: "",
    description: null,
    modified: "2020-09-18T16:04:26-0400",
    isbn: "",
    upc: "75960609939900111",
    diamondCode: "JUL200605",
    ean: "",
    issn: "",
    format: "Comic",
    pageCount: 32,
    textObjects: [],
    resourceURI: "http://gateway.marvel.com/v1/public/comics/90052",
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/issue/90052/tales_of_suspense_facsimile_edition_2020_39?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      }
    ],
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/31024",
      name: "Tales of Suspense Facsimile Edition (2020)"
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: "onsaleDate",
        date: "2020-09-23T00:00:00-0400"
      },
      {
        type: "focDate",
        date: "2020-08-31T00:00:00-0400"
      }
    ],
    prices: [
      {
        type: "printPrice",
        price: 3.99
      }
    ],
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/5f651095e824f",
      extension: "jpg"
    },
    images: [
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/f0/5f651095e824f",
        extension: "jpg"
      }
    ],
    creators: {
      available: 2,
      collectionURI:
        "http://gateway.marvel.com/v1/public/comics/90052/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/586",
          name: "Michael Kelleher",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4430",
          name: "Jeff Youngquist",
          role: "editor"
        }
      ],
      returned: 2
    },
    characters: {
      available: 1,
      collectionURI:
        "http://gateway.marvel.com/v1/public/comics/90052/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
          name: "Iron Man"
        }
      ],
      returned: 1
    },
    stories: {
      available: 2,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/90052/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/200800",
          name: "cover from Tales of Suspense 39 Facsimile Edition (2020) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/200801",
          name: "story from Tales of Suspense 39 Facsimile Edition (2020) #1",
          type: "interiorStory"
        }
      ],
      returned: 2
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/90052/events",
      items: [],
      returned: 0
    }
  }
];

const seriesMock = [
  {
    id: 16450,
    title: "A+X (2012 - 2014)",
    description:
      "Get ready for action-packed stories featuring team-ups from your favorite Marvel heroes every month! First, a story where Wolverine and Hulk come together, and then Captain America and Cable meet up! But will each partner's combined strength be enough?",
    resourceURI: "http://gateway.marvel.com/v1/public/series/16450",
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/series/16450/ax_2012_-_2014?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      }
    ],
    startYear: 2012,
    endYear: 2014,
    rating: "",
    type: "",
    modified: "2019-09-05T14:32:24-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/511e88a20ae34",
      extension: "jpg"
    },
    creators: {
      available: 87,
      collectionURI:
        "http://gateway.marvel.com/v1/public/series/16450/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/11463",
          name: "Jason Aaron",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/191",
          name: "Kaare Andrews",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/8658",
          name: "James Asmus",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/232",
          name: "Chris Bachalo",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/9127",
          name: "Mike Benson",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/808",
          name: "Howard Chaykin",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/12452",
          name: "Mike Costa",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4014",
          name: "Axel Alonso",
          role: "editor"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/11575",
          name: "Kris Anka",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1141",
          name: "Giuseppe Camuncoli",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1133",
          name: "Stefano Caselli",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/506",
          name: "Joe Bennett",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/13215",
          name: "Rain Beredo",
          role: "colorist (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/694",
          name: "Mark Brooks",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/11543",
          name: "Dan Brown",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/12604",
          name: "Jim Campbell",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/9937",
          name: "Jim Charalampidis",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/665",
          name: "Reilly Brown",
          role: "artist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/12467",
          name: "Orphans Cheeps",
          role: "artist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/452",
          name: "Virtual Calligr",
          role: "letterer"
        }
      ],
      returned: 20
    },
    characters: {
      available: 37,
      collectionURI:
        "http://gateway.marvel.com/v1/public/series/16450/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009148",
          name: "Absorbing Man"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009175",
          name: "Beast"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009187",
          name: "Black Panther"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009189",
          name: "Black Widow"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009211",
          name: "Bucky"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009214",
          name: "Cable"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009220",
          name: "Captain America"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010338",
          name: "Captain Marvel (Carol Danvers)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009268",
          name: "Deadpool"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009282",
          name: "Doctor Strange"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009277",
          name: "Domino"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009279",
          name: "Doop"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009301",
          name: "Fantomex"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009313",
          name: "Gambit"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009338",
          name: "Hawkeye"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009351",
          name: "Hulk"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009362",
          name: "Iceman"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009367",
          name: "Iron Fist (Danny Rand)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
          name: "Iron Man"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009508",
          name: "Kitty Pryde"
        }
      ],
      returned: 20
    },
    stories: {
      available: 66,
      collectionURI: "http://gateway.marvel.com/v1/public/series/16450/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97110",
          name: "A+X (2012) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97166",
          name: "cover from All-New X-Men (2012) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97167",
          name: "story from All-New X-Men (2012) #1",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97170",
          name: "cover from All-New X-Men (2012) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97171",
          name: "story from All-New X-Men (2012) #1",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97172",
          name: "cover from All-New X-Men (2012) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97173",
          name: "story from All-New X-Men (2012) #1",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97174",
          name: "cover from All-New X-Men (2012) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97175",
          name: "story from All-New X-Men (2012) #1",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97176",
          name: "A+X (2012) #2",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97177",
          name: "story from All-New X-Men (2012) #1",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97182",
          name: "A+X (2012) #3",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97183",
          name: "story from All-New X-Men (2012) #3",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97186",
          name: "cover from All-New X-Men (2012) #4",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97187",
          name: "story from All-New X-Men (2012) #4",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97188",
          name: "A+X (2012) #4",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97189",
          name: "story from All-New X-Men (2012) #5",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97190",
          name: "cover from All-New X-Men (2012) #6",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97191",
          name: "story from All-New X-Men (2012) #6",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/97192",
          name: "cover from All-New X-Men (2012) #7",
          type: "cover"
        }
      ],
      returned: 20
    },
    comics: {
      available: 27,
      collectionURI: "http://gateway.marvel.com/v1/public/series/16450/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43488",
          name: "A+X (2012) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/45763",
          name: "A+X (2012) #1 (2nd Printing Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43495",
          name: "A+X (2012) #2"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43498",
          name: "A+X (2012) #3"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/44569",
          name: "A+X (2012) #3 (Tan Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43499",
          name: "A+X (2012) #3 (Mcguinness Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43500",
          name: "A+X (2012) #3 (Mcguinness Sketch Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43501",
          name: "A+X (2012) #4"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43502",
          name: "A+X (2012) #4 (Mcguinness Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43503",
          name: "A+X (2012) #4 (Mcguinness Sketch Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/45765",
          name: "A+X (2012) #4 (Brooks Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43504",
          name: "A+X (2012) #5"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/45766",
          name: "A+X (2012) #5 (Del Mundo Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43505",
          name: "A+X (2012) #6"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
          name: "A+X (2012) #7"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/47068",
          name: "A+X (2012) #7 (Renaud Iron Man Many Armors Variant)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43507",
          name: "A+X (2012) #8"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43508",
          name: "A+X (2012) #9"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43509",
          name: "A+X (2012) #10"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/43510",
          name: "A+X (2012) #11"
        }
      ],
      returned: 20
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/series/16450/events",
      items: [],
      returned: 0
    },
    next: null,
    previous: null
  },
  {
    id: 7524,
    title: "Adam: Legend of the Blue Marvel (2008)",
    description: null,
    resourceURI: "http://gateway.marvel.com/v1/public/series/7524",
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/series/7524/adam_legend_of_the_blue_marvel_2008?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      }
    ],
    startYear: 2008,
    endYear: 2008,
    rating: "",
    type: "",
    modified: "2010-12-16T16:49:52-0500",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb4f0966a26a",
      extension: "jpg"
    },
    creators: {
      available: 12,
      collectionURI: "http://gateway.marvel.com/v1/public/series/7524/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/191",
          name: "Kaare Andrews",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4541",
          name: "Mat Broome",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/9360",
          name: "Roberto Castro",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/8194",
          name: "Carrie Spiegle",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1054",
          name: "Juan Doe",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1143",
          name: "John Rauch",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4990",
          name: "Kevin Grevioux",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/878",
          name: "Dave Lanphear",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1065",
          name: "Nate Piekos",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/10433",
          name: "Alvaro Lopez",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/2986",
          name: "Sean Parsons",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1142",
          name: "Lorenzo Ruggiero",
          role: "inker"
        }
      ],
      returned: 12
    },
    characters: {
      available: 16,
      collectionURI:
        "http://gateway.marvel.com/v1/public/series/7524/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010784",
          name: "Ares"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009189",
          name: "Black Widow"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1011339",
          name: "Blue Marvel"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010338",
          name: "Captain Marvel (Carol Danvers)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009299",
          name: "Fantastic Four"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1011490",
          name: "Hank Pym"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009356",
          name: "Human Torch"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009366",
          name: "Invisible Woman"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
          name: "Iron Man"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009459",
          name: "Mr. Fantastic"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009466",
          name: "Namor"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009552",
          name: "S.H.I.E.L.D."
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009571",
          name: "Sentry (Robert Reynolds)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009583",
          name: "She-Hulk (Jennifer Walters)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009707",
          name: "Wasp"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009719",
          name: "Wonder Man"
        }
      ],
      returned: 16
    },
    stories: {
      available: 14,
      collectionURI: "http://gateway.marvel.com/v1/public/series/7524/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/49796",
          name: "6XLS 1 of 6",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/49797",
          name: "6XLS 1 of 6",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/50758",
          name: "6XLS 2 of 6",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/50759",
          name: "6XLS 2 of 6",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/51171",
          name: "6XLS 3 of 6",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/51172",
          name: "6XLS 3 of 6",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52188",
          name: "6XLS 4 of 6",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52189",
          name: "6XLS 4 of 6",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52667",
          name: "5XLS 5 of 5",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52668",
          name: "5XLS 5 of 5",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/53884",
          name: "Cover #53884",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/53885",
          name: "Interior #53885",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/64296",
          name: "Cover #64296",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/64297",
          name: "Interior #64297",
          type: "interiorStory"
        }
      ],
      returned: 14
    },
    comics: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/series/7524/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/24348",
          name: "Adam: Legend of the Blue Marvel (Trade Paperback)"
        }
      ],
      returned: 1
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/series/7524/events",
      items: [],
      returned: 0
    },
    next: null,
    previous: null
  }
];

const storiesMock = [
  {
    id: 670,
    title: "X-MEN (2004) #186",
    description: "",
    resourceURI: "http://gateway.marvel.com/v1/public/stories/670",
    type: "cover",
    modified: "2017-02-27T11:41:03-0500",
    thumbnail: null,
    creators: {
      available: 6,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/670/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/393",
          name: "Casey Jones",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/11757",
          name: "Salvador Larroca",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/94",
          name: "Peter Milligan",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/361",
          name: "Cory Petit",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/561",
          name: "Wil Quintana",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/5973",
          name: "Vince Russel",
          role: "inker"
        }
      ],
      returned: 6
    },
    characters: {
      available: 8,
      collectionURI:
        "http://gateway.marvel.com/v1/public/stories/670/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009175",
          name: "Beast"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009220",
          name: "Captain America"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009257",
          name: "Cyclops"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009337",
          name: "Havok"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
          name: "Iron Man"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009546",
          name: "Rogue"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009718",
          name: "Wolverine"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009726",
          name: "X-Men"
        }
      ],
      returned: 8
    },
    series: {
      available: 2,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/670/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/403",
          name: "X-Men (2004 - 2007)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1644",
          name: "X-Men: Blood of Apocalypse (2006)"
        }
      ],
      returned: 2
    },
    comics: {
      available: 2,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/670/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/4181",
          name: "X-Men (2004) #186"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/4441",
          name: "X-Men: Blood of Apocalypse (Trade Paperback)"
        }
      ],
      returned: 2
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/670/events",
      items: [],
      returned: 0
    },
    originalIssue: {
      resourceURI: "http://gateway.marvel.com/v1/public/comics/4181",
      name: "X-Men (2004) #186"
    }
  },
  {
    id: 892,
    title: "THOR (1998) #81",
    description: "",
    resourceURI: "http://gateway.marvel.com/v1/public/stories/892",
    type: "cover",
    modified: "2017-09-27T10:35:28-0400",
    thumbnail: null,
    creators: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/892/creators",
      items: [],
      returned: 0
    },
    characters: {
      available: 4,
      collectionURI:
        "http://gateway.marvel.com/v1/public/stories/892/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009165",
          name: "Avengers"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009220",
          name: "Captain America"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
          name: "Iron Man"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
          name: "Thor"
        }
      ],
      returned: 4
    },
    series: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/892/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/581",
          name: "Thor (1998 - 2004)"
        }
      ],
      returned: 1
    },
    comics: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/892/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/715",
          name: "Thor (1998) #81"
        }
      ],
      returned: 1
    },
    events: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/stories/892/events",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/234",
          name: "Avengers Disassembled"
        }
      ],
      returned: 1
    },
    originalIssue: {
      resourceURI: "http://gateway.marvel.com/v1/public/comics/715",
      name: "Thor (1998) #81"
    }
  }
];

const eventsMock = [
  {
    id: 116,
    title: "Acts of Vengeance!",
    description:
      "Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.",
    resourceURI: "http://gateway.marvel.com/v1/public/events/116",
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/events/116/acts_of_vengeance?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      },
      {
        type: "wiki",
        url:
          "http://marvel.com/universe/Acts_of_Vengeance!?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      }
    ],
    modified: "2013-06-28T16:31:24-0400",
    start: "1989-12-10 00:00:00",
    end: "2008-01-04 00:00:00",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b",
      extension: "jpg"
    },
    creators: {
      available: 102,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/2707",
          name: "Jeff Albrecht",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/2077",
          name: "Hilary Barta",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1277",
          name: "Bret Blevins",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/5823",
          name: "Danilo Bulanadi",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/87",
          name: "Mark Bagley",
          role: "penciler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/211",
          name: "Mark Bright",
          role: "penciler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/2043",
          name: "Eliot Brown",
          role: "penciler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1216",
          name: "Rich Buckler",
          role: "penciler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1827",
          name: "John Byrne",
          role: "penciler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/2713",
          name: "Gary Barnum",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1231",
          name: "Kurt Busiek",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/452",
          name: "Virtual Calligr",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/44",
          name: "Chris Claremont",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/954",
          name: "Gerry Conway",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1935",
          name: "Paul Becton",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1909",
          name: "Steve Buccellato",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1871",
          name: "Ken Bruzenak",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1887",
          name: "Janice Chiang",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/105",
          name: "Sal Buscema",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/3415",
          name: "John Calimee",
          role: "penciller (cover)"
        }
      ],
      returned: 20
    },
    characters: {
      available: 103,
      collectionURI:
        "http://gateway.marvel.com/v1/public/events/116/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009435",
          name: "Alicia Masters"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010370",
          name: "Alpha Flight"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009152",
          name: "Ancient One"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009156",
          name: "Apocalypse"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009159",
          name: "Archangel"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009165",
          name: "Avengers"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009168",
          name: "Banshee"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009175",
          name: "Beast"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009179",
          name: "Beetle (Abner Jenkins)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009329",
          name: "Ben Grimm"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009186",
          name: "Black Knight (Sir Percy of Scandia)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009189",
          name: "Black Widow"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010366",
          name: "Boom Boom"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009167",
          name: "Bruce Banner"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009213",
          name: "Bushwacker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009220",
          name: "Captain America"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1011027",
          name: "Captain Universe"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009234",
          name: "Chameleon"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009239",
          name: "Clea"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009243",
          name: "Colossus"
        }
      ],
      returned: 20
    },
    stories: {
      available: 160,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12960",
          name: "Fantastic Four (1961) #334",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12961",
          name: "Shadows of Alarm..!",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12962",
          name: "Fantastic Four (1961) #335",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12963",
          name: "Death by Debate",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12964",
          name: "Fantastic Four (1961) #336",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/12965",
          name: "Dark Congress!",
          type: ""
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14056",
          name: "Amazing Spider-Man (1963) #326",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14057",
          name: "Amazing Spider-Man (1963) #326",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14058",
          name: "Amazing Spider-Man (1963) #327",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14059",
          name: "Cunning Attractions!",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14060",
          name: "Amazing Spider-Man (1963) #328",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14061",
          name: "Shaw's Gambit",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14062",
          name: "Amazing Spider-Man (1963) #329",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14063",
          name: "Amazing Spider-Man (1963) #329",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14916",
          name: "AVENGERS (1963) #311",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14917",
          name: "The Weakest Point",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14918",
          name: "AVENGERS (1963) #312",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14919",
          name: "Has the Whole World Gone Mad?!?",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14920",
          name: "AVENGERS (1963) #313",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/14921",
          name: "Thieves Honor",
          type: "interiorStory"
        }
      ],
      returned: 20
    },
    comics: {
      available: 52,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12744",
          name: "Alpha Flight (1983) #79"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/12746",
          name: "Alpha Flight (1983) #80"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/7188",
          name: "Avengers (1963) #311"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/7189",
          name: "Avengers (1963) #312"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/7190",
          name: "Avengers (1963) #313"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/6933",
          name: "Avengers Annual (1967) #19"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17795",
          name: "West Coast Avengers (1985) #53"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17796",
          name: "West Coast Avengers (1985) #54"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17797",
          name: "West Coast Avengers (1985) #55"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17695",
          name: "Avengers West Coast: Darker than Scarlet (Trade Paperback)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/7746",
          name: "Captain America (1968) #365"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/7747",
          name: "Captain America (1968) #366"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/7748",
          name: "Captain America (1968) #367"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/8268",
          name: "Daredevil (1964) #275"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/8269",
          name: "Daredevil (1964) #276"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/20170",
          name: "Doctor Strange, Sorcerer Supreme (1988) #11"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/20171",
          name: "Doctor Strange, Sorcerer Supreme (1988) #12"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/20172",
          name: "Doctor Strange, Sorcerer Supreme (1988) #13"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/13155",
          name: "Fantastic Four (1961) #334"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/13156",
          name: "Fantastic Four (1961) #335"
        }
      ],
      returned: 20
    },
    series: {
      available: 22,
      collectionURI: "http://gateway.marvel.com/v1/public/events/116/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2116",
          name: "Alpha Flight (1983 - 1994)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1991",
          name: "Avengers (1963 - 1996)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1988",
          name: "Avengers Annual (1967 - 1994)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3462",
          name: "Avengers West Coast: Darker than Scarlet (2008)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
          name: "Captain America (1968 - 1996)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2002",
          name: "Daredevil (1964 - 1998)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
          name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
          name: "Fantastic Four (1961 - 1998)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
          name: "Incredible Hulk (1962 - 1999)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2029",
          name: "Iron Man (1968 - 1996)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2055",
          name: "New Mutants (1983 - 1991)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2271",
          name: "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/5860",
          name: "Punisher War Journal (1988 - 1995)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3695",
          name: "Quasar (1989 - 1994)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2288",
          name: "Silver Surfer (1987 - 1998)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
          name: "The Amazing Spider-Man (1963 - 1998)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2083",
          name: "Thor (1966 - 1996)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2258",
          name: "Uncanny X-Men (1963 - 2011)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/2092",
          name: "Web of Spider-Man (1985 - 1995)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3630",
          name: "West Coast Avengers (1985 - 1994)"
        }
      ],
      returned: 20
    },
    next: {
      resourceURI: "http://gateway.marvel.com/v1/public/events/240",
      name: "Days of Future Present"
    },
    previous: {
      resourceURI: "http://gateway.marvel.com/v1/public/events/233",
      name: "Atlantis Attacks"
    }
  },
  {
    id: 303,
    title: "Age of X",
    description:
      "In a strange reality where the X-Men never came to be, the war between humans and mutants has escalated to a level never before seen. What has become of our heroes and who will survive as the final war commences?",
    resourceURI: "http://gateway.marvel.com/v1/public/events/303",
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/events/303/age_of_x?utm_campaign=apiRef&utm_source=884d5d5f184707fad658543369c7797d"
      }
    ],
    modified: "2013-06-28T18:34:27-0400",
    start: "2011-01-26 00:00:00",
    end: "2011-05-01 00:00:00",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/5/40/51ca12a34615b",
      extension: "jpg"
    },
    creators: {
      available: 39,
      collectionURI: "http://gateway.marvel.com/v1/public/events/303/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/1107",
          name: "Dan Abnett",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/366",
          name: "Mike Carey",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/3736",
          name: "Chuck Kim",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/485",
          name: "Andy Lanning",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/9967",
          name: "Jim Mccann",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/232",
          name: "Chris Bachalo",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/648",
          name: "Simone Bianchi",
          role: "penciller (cover)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/412",
          name: "Carlo Barberi",
          role: "penciler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/5251",
          name: "Vc Joe Caramagna",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/12581",
          name: "Chris Eliopoulos",
          role: "letterer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/692",
          name: "Pat Davidson",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/9224",
          name: "Paul Davidson",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4150",
          name: "Paco Diaz",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/616",
          name: "Jay Leisten",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/7183",
          name: "Allen Martinez",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/428",
          name: "Antonio Fabela",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/273",
          name: "Leandro Fernandez",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4981",
          name: "Steve Kurth",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/757",
          name: "Clay Mann",
          role: "penciller"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/11737",
          name: "Daniel Ketchum",
          role: "editor"
        }
      ],
      returned: 20
    },
    characters: {
      available: 45,
      collectionURI:
        "http://gateway.marvel.com/v1/public/events/303/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009158",
          name: "Arcade"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009164",
          name: "Avalanche"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009165",
          name: "Avengers"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009175",
          name: "Beast"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009199",
          name: "Blob"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009219",
          name: "Cannonball"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009220",
          name: "Captain America"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009536",
          name: "Cecilia Reyes"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009233",
          name: "Chamber"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009243",
          name: "Colossus"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009257",
          name: "Cyclops"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009267",
          name: "Dazzler"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009277",
          name: "Domino"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009310",
          name: "Emma Frost"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009229",
          name: "Frank Castle"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009313",
          name: "Gambit"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009318",
          name: "Ghost Rider (Johnny Blaze)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009337",
          name: "Havok"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1010678",
          name: "Hellion"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009351",
          name: "Hulk"
        }
      ],
      returned: 20
    },
    stories: {
      available: 22,
      collectionURI: "http://gateway.marvel.com/v1/public/events/303/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80882",
          name: "X-MEN LEGACY (2008) #247",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80883",
          name: "X-Men Legacy (2008) #247",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80892",
          name: "X-MEN LEGACY (2008) #245",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80893",
          name: "X-Men Legacy #245",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80896",
          name: "X-MEN LEGACY (2008) #248",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80897",
          name: "Interior #80897",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80898",
          name: "X-MEN LEGACY (2008) #249",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80899",
          name: "Interior #80899",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80904",
          name: "X-MEN LEGACY (2008) #246",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/80905",
          name: "X-MEN LEGACY 246",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/81019",
          name: "NEW MUTANTS (2009) #22",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/81020",
          name: "New Mutants #22 ",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/81023",
          name: "NEW MUTANTS (2009) #24",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/81024",
          name: "Interior #81024",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/81033",
          name: "NEW MUTANTS (2009) #23",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/81034",
          name: "NEW MUTANTS #23 ",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/83523",
          name: "Age of X: Alpha (2010) #1",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/83524",
          name: "Interior #83524  ",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/84589",
          name: "Age of X: Universe (2011) #2",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/84590",
          name: "Interior #84590   ",
          type: "interiorStory"
        }
      ],
      returned: 20
    },
    comics: {
      available: 11,
      collectionURI: "http://gateway.marvel.com/v1/public/events/303/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/37996",
          name: "Age of X: Alpha (2010) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/38524",
          name: "Age of X: Universe (2011) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/38523",
          name: "Age of X: Universe (2011) #2"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36495",
          name: "New Mutants (2009) #22"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36502",
          name: "New Mutants (2009) #23"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36497",
          name: "New Mutants (2009) #24"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36431",
          name: "X-Men Legacy (2008) #245"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36437",
          name: "X-Men Legacy (2008) #246"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36426",
          name: "X-Men Legacy (2008) #247"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36433",
          name: "X-Men Legacy (2008) #248"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36434",
          name: "X-Men Legacy (2008) #249"
        }
      ],
      returned: 11
    },
    series: {
      available: 4,
      collectionURI: "http://gateway.marvel.com/v1/public/events/303/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/13603",
          name: "Age of X: Alpha (2010)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/13896",
          name: "Age of X: Universe (2011)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/7455",
          name: "New Mutants (2009 - 2012)"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3754",
          name: "X-Men Legacy (2008 - 2012)"
        }
      ],
      returned: 4
    },
    next: {
      resourceURI: "http://gateway.marvel.com/v1/public/events/302",
      name: "Fear Itself"
    },
    previous: {
      resourceURI: "http://gateway.marvel.com/v1/public/events/296",
      name: "Chaos War"
    }
  }
];

const heroMock = {
  id: 1009368,
  name: "Iron Man",
  description:
    "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
  modified: "2016-09-28T12:08:19-0400",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
    extension: "jpg"
  },
  comics: comicsMock,
  events: eventsMock,
  stories: storiesMock,
  series: seriesMock
};

export {
  heroesListMock,
  heroMock,
  comicsMock,
  eventsMock,
  seriesMock,
  storiesMock
};
