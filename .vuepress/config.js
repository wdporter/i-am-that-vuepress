module.exports = {
  title: "I Am That",
	description: "I Am That — Dialogues of Sri Nisargadatta Maharaj",
	lang: "en",
	evergreen: true,
	plugins: ['@vuepress/back-to-top'],
	themeConfig: {
		navbar: false,
		smoothScroll: true,
		sidebar: [
			{
				title: "1–10",
				children: [
					"/1-the-sense-of-i-am/",
					"/2-obsession-with-the-body/",
					"/3-the-living-present/",
					"/4-real-world-is-beyond-the-mind/",
					"/5-what-is-born-must-die/",
					"/6-meditation/",
					"/7-the-mind/",
					"/8-the-self-stands-beyond-mind/",
					"/9-responses-of-memory/",
					"/10-witnessing/" 
				]
			},
			{
				title: "11–20",
				children: [
					"/11-awareness-and-consciousness/",
					"/12-the-person-is-not-reality/" 
				]
			},
			{
				title: "Front Matter",
				children: [
					"/foreword/",
					"/who-is-nisargadatta-maharaj/",
					"/translators-note/",
					"/editors-note/"
				]
			}
		]
	}
}