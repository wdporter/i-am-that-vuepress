module.exports = {
	title: "I Am That",
	description: "I Am That — Dialogues of Sri Nisargadatta Maharaj",
	lang: "en",
	evergreen: true,
	plugins: [
		"@vuepress/back-to-top",
		"@vuepress/pwa",
		{
			serviceWorker: true,
			updatePopup: true
		}
	],
	head: [
		["link", { rel: "icon", href: "/favicon.svg" }],
		["link", { rel: "manifest", href: "/manifest.json" }],
		["meta", { name: "theme-color", content: "#4B0082" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
		["link", { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" }],
		["link", { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#4B0082" }],
		["script", { src: "https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js" }],
		["script", { src: "https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js" }]
	],
	themeConfig: {
		search: false,
		smoothScroll: true,
		sidebar: [
			"/",
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
					"/12-the-person-is-not-reality/",
					"/13-the-supreme-the-mind-and-the-body/",
					"/14-appearances-and-the-reality/",
					"/15-the-jnani/",
					"/16-desirelessness-the-highest-bliss/",
					"/17-the-ever-present/",
					"/18-to-know-what-you-are-find-out-what-you-are-not/",
					"/19-reality-lies-in-objectivity/",
					"/20-the-supreme-is-beyond-all/"
				]
			},
			{
				title: "21–30",
				children: [
					"/21-who-am-i/",
					"/22-life-is-love-and-love-is-life/",
					"/23-discrimination-leads-to-detachment/",
					"/24-god-is-the-all-doer-the-jnani-a-non-doer/",
					"/25-hold-on-to-i-am/",
					"/26-personality-an-obstacle/",
					"/27-the-beginningless-begins-forever/",
					"/28-all-suffering-is-born-of-desire/",
					"/29-living-is-lifes-only-purpose/",
					"/30-you-are-free-now/"
				]
			},
			{
				title: "31–40",
				children: [
					"/31-do-not-undervalue-attention/",
					"/32-life-is-the-supreme-guru/",
					"/33-to-see-the-unreal-is-wisdom/",
					"/34-mind-is-restlessness-itself/",
					"/35-the-greatest-guru-is-your-inner-self/",
					"/36-killing-hurts-the-killer-not-the-killed/",
					"/37-beyond-pain-and-pleasure-there-is-bliss/",
					"/38-spiritual-practice-is-will-asserted-and-reasserted/",
					"/39-by-itself-nothing-has-existence/",
					"/40-only-the-self-is-real/"
				]
			},
			{
				title: "41–50",
				children: [
					"/41-develop-the-witness-attitude/",
					"/42-reality-cannot-be-expressed/",
					"/43-ignorance-can-be-recognised-not-jnana/",
					"/44-i-am-is-true-all-else-is-inference/",
					"/45-what-comes-and-goes-has-no-being/",
					"/46-awareness-of-being-is-bliss/",
					"/47-watch-your-mind/",
					"/48-awareness-is-free/",
					"/49-mind-causes-insecurity/",
					"/50-self-awareness-is-the-witness/"
				]
			},
			{
				title: "51–60",
				children: [
					"/51-be-indifferent-to-pain-and-pleasure/",
					"/52-being-happy-making-happy-is-the-rhythm-of-life/",
					"/53-desires-fulfilled-breed-more-desires/",
					"/54-body-and-mind-are-symptoms-of-ignorance/",
					"/55-give-up-all-and-you-gain-all/",
					"/56-consciousness-arising-world-arises/",
					"/57-beyond-mind-there-is-no-suffering/",
					"/58-perfection-destiny-of-all/",
					"/59-desire-and-fear-self-centred-states/",
					"/60-live-facts-not-fancies/"
				]
			},
			{
				title: "61–70",
				children: [
					"/61-matter-is-consciousness-itself/",
					"/62-in-the-supreme-the-witness-appears/",
					"/63-the-notion-of-doership-is-bondage/",
					"/64-whatever-pleases-you-keeps-you-back/",
					"/65-a-quiet-mind-is-all-you-need/",
					"/66-all-search-for-happiness-is-misery/",
					"/67-experience-is-not-the-real-thing/",
					"/68-seek-the-source-of-consciousness/",
					"/69-transiency-is-proof-of-unreality/",
					"/70-god-is-the-end-of-all-desire-and-knowledge/"
				]
			},
			{
				title: "71–80",
				children: [
					"/71-in-self-awareness-you-learn-about-yourself/",
					"/72-what-is-pure-unalloyed-unattached-is-real/",
					"/73-the-death-of-the-mind-is-the-birth-of-wisdom/",
					"/74-the-truth-is-here-and-now/",
					"/75-in-peace-and-silence-you-grow/",
					"/76-to-know-that-you-do-not-know-is-true-knowledge/",
					"/77-i-and-mine-are-false-ideas/",
					"/78-all-knowledge-is-ignorance/",
					"/79-the-person-the-witness-and-the-supreme/",
					"/80-awareness/"
				]
			},
			{
				title: "81–90",
				children: [
					"/81-the-root-cause-of-fear/",
					"/82-absolute-perfection-is-here-and-now/",
					"/83-the-true-guru/",
					"/84-your-goal-is-your-guru/",
					"/85-i-am-the-foundation-of-all-experience/",
					"/86-the-unknown-is-the-home-of-the-real/",
					"/87-keep-the-mind-silent-and-you-shall-discover/",
					"/88-knowledge-by-the-mind-is-not-true-knowledge/",
					"/89-progress-in-spiritual-life/",
					"/90-surrender-to-your-own-self/"
				]
			},
			{
				title: "90–101",
				children: [
					"/91-pleasure-and-happiness/",
					"/92-go-beyond-the-i-am-the-body-idea/",
					"/93-man-is-not-the-doer/",
					"/94-you-are-beyond-space-and-time/",
					"/95-accept-life-as-it-comes/",
					"/96-abandon-memories-and-expectations/",
					"/97-the-mind-and-the-world-are-not-separate/",
					"/98-freedom-from-self-identification/",
					"/99-the-perceived-cannot-be-the-perceiver/",
					"/100-understanding-leads-to-freedom/",
					"/101-a-jnani-does-not-grasp-nor-hold/"
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
			},
			{
				title: "Back Matter",
				children: [
					"/highlights/",
					"/appendix-1-nisarga-yoga/",
					"/appendix-2-navnath-sampradaya/",
					"/glossary/"
				]
			}
		]
	}
}
