import { http } from 'msw'
import { API_BASE, ARTICLES_PATH } from '../common/api'

const articleRequestUrl = `${API_BASE}/business/article/id`
export const articlesRequestUrl = `${API_BASE}${ARTICLES_PATH}`
const badArticleRequestUrl = `${API_BASE}/bad/id`

const articleResponse = {
  response: {
    status: 'ok',
    userTier: 'developer',
    total: 1,
    content: {
      id: 'us-news/article/2024/jun/27/first-thing-biden-and-trump-prepare-for-tv-debate',
      type: 'article',
      sectionId: 'us-news',
      sectionName: 'US news',
      webPublicationDate: '2024-06-27T11:05:02Z',
      webTitle: 'Big Debate Coming Up',
      webUrl:
        'https://www.theguardian.com/us-news/article/2024/jun/27/first-thing-biden-and-trump-prepare-for-tv-debate',
      apiUrl:
        'https://content.guardianapis.com/us-news/article/2024/jun/27/first-thing-biden-and-trump-prepare-for-tv-debate',
      tags: [
        {
          id: 'profile/vivian-ho',
          type: 'contributor',
          webTitle: 'Vivian Ho',
          webUrl: 'https://www.theguardian.com/profile/vivian-ho',
          apiUrl: 'https://content.guardianapis.com/profile/vivian-ho',
          references: [],
          firstName: 'Vivian',
          lastName: 'Ho'
        }
      ],
      blocks: {
        totalBodyBlocks: 1,
        requestedBodyBlocks: {
          'body:latest': [
            {
              id: '5e8606d88f0866297e9f5d2d',
              bodyHtml:
                '<p>Good morning.</p> <p>Joe Biden and Donald Trump will face off once again in a CNN studio in Atlanta for <a href="https://www.theguardian.com/us-news/article/2024/jun/27/biden-trump-presidential-debate">the first presidential debate of the campaign</a>. Though this will be the earliest in any US presidential campaign that a debate between the two main candidates has been staged, polls currently indicate that the race is essentially tied, upping the stakes for both candidates to perform well on Thursday night.</p> <p>“We have a majority of voters who are unhappy with the incumbent, but they don’t have great recollection of what the prior officeholder did either,” said Patrick Murray, head of the Polling Institute at Monmouth University. “That sets us up for a very tight race where people just don’t know when they want to go.”</p> <ul> <li><p><strong>What do the polls say?</strong> A national polling average for May and June showed <a href="https://www.nytimes.com/interactive/2024/us/elections/polls-president.html">the candidates at 46% each</a>, while polls in seven key battleground states – Wisconsin, Michigan, Pennsylvania, Nevada, Arizona, Georgia and North Carolina – give Trump a narrow advantage, though usually within the margin of error.</p></li> <li><p><strong>What should we expect?</strong> Biden will likely be aiming to dilute criticism of his age with an energetic performance, and could be prepared to go on the offensive regarding Trump’s criminal record. Meanwhile, Trump advisers who know he needs at least some moderate voters to win will be hoping he can tone down his most virulent rhetoric, such as saying immigrants are “poisoning the blood of our country”.</p></li> <li><p><strong>What have the candidates been saying ahead of the debate?</strong> Trump has unleashed <a href="https://www.theguardian.com/us-news/article/2024/jun/26/trump-biden-presidential-debate">a fusillade of baseless accusations</a> against Biden and CNN moderators in a familiar rehash of tactics used in previous campaigns.</p></li> </ul> <h2><strong>Bolivia’s president sees off attempted coup after urging citizens to take to streets</strong></h2>    <p>On Wednesday, heavily armed troops, seemingly commanded by a top army general, stormed Bolivia’s government palace in <a href="https://www.theguardian.com/world/article/2024/jun/26/luis-arce-bolivia-coup">an attempted coup</a> before beating a retreat and seeing their alleged leader detained. Bolivia’s president, Luis Arce, appeared to have seen off the attempt after urging citizens in a video message to take to the streets to defend democracy.</p> <p>Video footage showed the president confronting Gen Juan José Zúñiga as he entered the palace and instructing him to stand his troops down: “I am your captain. Obey my orders.”</p> <h2><strong>In other news …</strong></h2>    <ul> <li><p><strong>Paris Hilton testified before a </strong><strong>house committee looking into strengthening child welfare protection</strong><strong> </strong>that she was “force-fed medications and sexually abused by staff” while she was<a href="https://www.theguardian.com/lifeandstyle/article/2024/jun/26/paris-hilton-testimony-congress-abuse-teen-facility"> institutionalized as a teenager</a>.</p></li> <li><p><strong>On Julian Assange’s first full day back in Australia, his wife, Stella Assange, urged Australian journalists </strong>to lodge freedom of information requests with the US government for details on <a href="https://www.theguardian.com/australia-news/article/2024/jun/27/julian-assange-wife-stella-foi-act-case-prison-release-plea-deal">its criminal case against her husband</a>.</p></li> <li><p><strong>Israel’s defence minister, Yoav Gallant, has warned that Israel’s military is capable of taking Lebanon “back to the stone age”</strong> in any war with Hezbollah militants, but is insisting his government prefers <a href="https://www.theguardian.com/world/live/2024/jun/27/israel-gaza-war-live-israel-warns-it-could-take-lebanon-back-to-the-stone-age-as-defence-minister-wraps-up-washington-trip?CMP=share_btn_url&amp;page=with%3Ablock-667cd8bc8f0879fc3d68e066#block-667cd8bc8f0879fc3d68e066">a diplomatic solution on the Israel-Lebanon border</a>.</p></li> </ul> <h2><strong>Stat of the day: Global plastic production has more than doubled over the past two decades</strong></h2>    <p>Annual global plastic production soared from 2m tonnes in 1950 to 234m tonnes in 2000. By 2019, production <a href="https://www.theguardian.com/environment/article/2024/jun/26/plastics-companies-blocking-mitigation-efforts">more than doubled to 460m </a>tonnes, with plastic pollution placing widespread burdens in US cities and states. A new report from the Center for International Environmental Law is now arguing that petrochemical producers such as ExxonMobil Chemical and Shell Polymers, and disposable plastic goods producers such as Coca-Cola, PepsiCo and Unilever, should be held responsible.</p> <h2><strong>Don’t miss this: Inside the DMZ as tensions between North and South Korea rise</strong></h2>    <p>Tensions between North and South Korea <a href="https://www.theguardian.com/world/article/2024/jun/27/north-south-korea-dmz-balloons-tensions">have risen in recent weeks</a>, with the North sending thousands of balloons across the border to scatter manure, cigarette butts, used batteries, cloth scraps and wastepaper on South Korean streets, and defector groups in the South sending back balloons of leaflets and USB sticks loaded with K-pop and K-dramas designed to undermine the legitimacy of the North’s leader, Kim Jong-un. Residents of the South Korean village of Daeseong-dong – the only inhabited area in the demilitarized zone (DMZ) – are nervous. “What if something happens? It’s always on our minds,” said one farmer, Park Se-un.</p> <h2><strong>… or this: The man who has led Hezbollah to the brink of war with Israel</strong></h2>    <p>Hezbollah has transformed under the leadership of general secretary, Hassan Nasrallah, both as a fighting force and in its relationship with the fragile Lebanese state. While Nasrallah’s rhetoric may have remained unchanged over the years, his appreciation of the fragility of power, even for the world’s most powerfully armed non-state actor, has mutated. With Hezbollah sending rockets and drones into Israel, and Israel hitting Lebanon and Hezbollah targets with airstrikes, Nasrallah is leading Hezbollah to the <a href="https://www.theguardian.com/world/article/2024/jun/27/hassan-nasrallah-hezbollah-leader-profile">brink of what could be its most serious conflict</a>. The question now is what does Nasrallah want – and how far he is in control of any outcome.</p> <h2><strong>Climate check:</strong> <strong>The world’s first emissions tax on agriculture</strong></h2>    <p>The government in Denmark will set the <a href="https://www.theguardian.com/world/article/2024/jun/26/flatulent-livestock-to-incur-green-levy-in-denmark-from-2035">world’s first emissions tax on agriculture</a>, requiring farmers to pay for the planet-heating pollutants that their cattle expel as gas. While agriculture is responsible for about one-third of planet-heating pollution – about half of which comes from animals such as cattle that emit methane gas when digesting food – lawmakers have long been reluctant to rein in its emissions. Angry farmers have brought traffic to a standstill in European capitals several times this year in sometimes violent protests.</p> <p>“This is a historic compromise that sets a completely new direction for land use,” said Maria Reumert Gjerding, the president of the Danish Society for Nature Conservation. “Despite major disagreements, we have managed to reach a compromise on a carbon tax that paves the way for a transformed food industry – also beyond 2030.”</p> <h2><strong>Last Thing: Acting in a video game</strong></h2>    <p>Tom Regan spoke to the stars of the YouTube D&amp;D series Natural Six – Harry McEntire, Doug Cockle and Ben Starr – about the challenges and joys of <a href="https://www.theguardian.com/games/article/2024/jun/27/act-in-a-video-game-harry-mcentire-doug-colckle-ben-starr-">voice acting in video games</a>, essentially being a part of creating characters for roles than can stretch to 40 hours of invisible screen time.</p> <p>“It is bizarre,” Cockle said. “You just have to be in the character in that moment in that world, in your brain. On stage and screen, you have other actors, you have props, costumes … all these things that are helping you do this thing called ‘acting’. When you’re a voice actor, it’s just you in the booth and the director and the engineer on the other side of a glass wall, eating Jelly Babies.”</p> <h2><strong>Sign up</strong></h2>  <figure class="element element-embed" data-alt="Sign up for the US morning briefing">  <iframe src="https://www.theguardian.com/email/form/plaintone/4300" height="52px" data-form-title="A different kind of daily email" data-form-description="Sign up and get a daily US news briefing from the Guardian" scrolling="no" seamless frameborder="0" class="iframed--overflow-hidden email-sub__iframe js-email-sub__iframe js-email-sub__iframe--article" data-form-success-desc="Thanks, you\'ll start getting the US morning briefing soon."></iframe> <figcaption>Sign up for the US morning briefing</figcaption> </figure>  <p>First Thing is delivered to thousands of inboxes every weekday. If you’re not already signed up, <a href="https://www.theguardian.com/info/2018/sep/17/guardian-us-morning-briefing-sign-up-to-stay-informed">subscribe now</a>.</p> <h2><strong>Get in touch</strong></h2> <p>If you have any questions or comments about any of our newsletters please email <a href="mailto:newsletters@theguardian.com">newsletters@theguardian.com</a></p>',
              bodyTextSummary:
                'Good morning. Joe Biden and Donald Trump will face off once again in a CNN studio in Atlanta for the first presidential debate of the campaign. Though this will be the earliest in any US presidential campaign that a debate between the two main candidates has been staged, polls currently indicate that the race is essentially tied, upping the stakes for both candidates to perform well on Thursday night. “We have a majority of voters who are unhappy with the incumbent, but they don’t have great recollection of what the prior officeholder did either,” said Patrick Murray, head of the Polling Institute at Monmouth University. “That sets us up for a very tight race where people just don’t know when they want to go.” What do the polls say? A national polling average for May and June showed the candidates at 46% each, while polls in seven key battleground states – Wisconsin, Michigan, Pennsylvania, Nevada, Arizona, Georgia and North Carolina – give Trump a narrow advantage, though usually within the margin of error. What should we expect? Biden will likely be aiming to dilute criticism of his age with an energetic performance, and could be prepared to go on the offensive regarding Trump’s criminal record. Meanwhile, Trump advisers who know he needs at least some moderate voters to win will be hoping he can tone down his most virulent rhetoric, such as saying immigrants are “poisoning the blood of our country”. What have the candidates been saying ahead of the debate? Trump has unleashed a fusillade of baseless accusations against Biden and CNN moderators in a familiar rehash of tactics used in previous campaigns. Bolivia’s president sees off attempted coup after urging citizens to take to streets\nOn Wednesday, heavily armed troops, seemingly commanded by a top army general, stormed Bolivia’s government palace in an attempted coup before beating a retreat and seeing their alleged leader detained. Bolivia’s president, Luis Arce, appeared to have seen off the attempt after urging citizens in a video message to take to the streets to defend democracy. Video footage showed the president confronting Gen Juan José Zúñiga as he entered the palace and instructing him to stand his troops down: “I am your captain. Obey my orders.” In other news …\nParis Hilton testified before a house committee looking into strengthening child welfare protection that she was “force-fed medications and sexually abused by staff” while she was institutionalized as a teenager. On Julian Assange’s first full day back in Australia, his wife, Stella Assange, urged Australian journalists to lodge freedom of information requests with the US government for details on its criminal case against her husband. Israel’s defence minister, Yoav Gallant, has warned that Israel’s military is capable of taking Lebanon “back to the stone age” in any war with Hezbollah militants, but is insisting his government prefers a diplomatic solution on the Israel-Lebanon border. Stat of the day: Global plastic production has more than doubled over the past two decades\nAnnual global plastic production soared from 2m tonnes in 1950 to 234m tonnes in 2000. By 2019, production more than doubled to 460m tonnes, with plastic pollution placing widespread burdens in US cities and states. A new report from the Center for International Environmental Law is now arguing that petrochemical producers such as ExxonMobil Chemical and Shell Polymers, and disposable plastic goods producers such as Coca-Cola, PepsiCo and Unilever, should be held responsible. Don’t miss this: Inside the DMZ as tensions between North and South Korea rise\nTensions between North and South Korea have risen in recent weeks, with the North sending thousands of balloons across the border to scatter manure, cigarette butts, used batteries, cloth scraps and wastepaper on South Korean streets, and defector groups in the South sending back balloons of leaflets and USB sticks loaded with K-pop and K-dramas designed to undermine the legitimacy of the North’s leader, Kim Jong-un. Residents of the South Korean village of Daeseong-dong – the only inhabited area in the demilitarized zone (DMZ) – are nervous. “What if something happens? It’s always on our minds,” said one farmer, Park Se-un. … or this: The man who has led Hezbollah to the brink of war with Israel\nHezbollah has transformed under the leadership of general secretary, Hassan Nasrallah, both as a fighting force and in its relationship with the fragile Lebanese state. While Nasrallah’s rhetoric may have remained unchanged over the years, his appreciation of the fragility of power, even for the world’s most powerfully armed non-state actor, has mutated. With Hezbollah sending rockets and drones into Israel, and Israel hitting Lebanon and Hezbollah targets with airstrikes, Nasrallah is leading Hezbollah to the brink of what could be its most serious conflict. The question now is what does Nasrallah want – and how far he is in control of any outcome. Climate check: The world’s first emissions tax on agriculture\nThe government in Denmark will set the world’s first emissions tax on agriculture, requiring farmers to pay for the planet-heating pollutants that their cattle expel as gas. While agriculture is responsible for about one-third of planet-heating pollution – about half of which comes from animals such as cattle that emit methane gas when digesting food – lawmakers have long been reluctant to rein in its emissions. Angry farmers have brought traffic to a standstill in European capitals several times this year in sometimes violent protests. “This is a historic compromise that sets a completely new direction for land use,” said Maria Reumert Gjerding, the president of the Danish Society for Nature Conservation. “Despite major disagreements, we have managed to reach a compromise on a carbon tax that paves the way for a transformed food industry – also beyond 2030.” Last Thing: Acting in a video game\nTom Regan spoke to the stars of the YouTube D&D series Natural Six – Harry McEntire, Doug Cockle and Ben Starr – about the challenges and joys of voice acting in video games, essentially being a part of creating characters for roles than can stretch to 40 hours of invisible screen time. “It is bizarre,” Cockle said. “You just have to be in the character in that moment in that world, in your brain. On stage and screen, you have other actors, you have props, costumes … all these things that are helping you do this thing called ‘acting’. When you’re a voice actor, it’s just you in the booth and the director and the engineer on the other side of a glass wall, eating Jelly Babies.” Sign up\nFirst Thing is delivered to thousands of inboxes every weekday. If you’re not already signed up, subscribe now. Get in touch If you have any questions or comments about any of our newsletters please email newsletters@theguardian.com',
              attributes: {},
              published: true,
              createdDate: '2024-06-27T11:05:02Z',
              firstPublishedDate: '2024-06-27T11:06:39Z',
              publishedDate: '2024-06-27T11:40:09Z',
              lastModifiedDate: '2024-06-27T11:40:09Z',
              contributors: [],
              elements: [
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>Good morning.</p> \n<p>Joe Biden and Donald Trump will face off once again in a CNN studio in Atlanta for <a href="https://www.theguardian.com/us-news/article/2024/jun/27/biden-trump-presidential-debate">the first presidential debate of the campaign</a>. Though this will be the earliest in any US presidential campaign that a debate between the two main candidates has been staged, polls currently indicate that the race is essentially tied, upping the stakes for both candidates to perform well on Thursday night.</p> \n<p>“We have a majority of voters who are unhappy with the incumbent, but they don’t have great recollection of what the prior officeholder did either,” said Patrick Murray, head of the Polling Institute at Monmouth University. “That sets us up for a very tight race where people just don’t know when they want to go.”</p> \n<ul> \n <li><p><strong>What do the polls say?</strong> A national polling average for May and June showed <a href="https://www.nytimes.com/interactive/2024/us/elections/polls-president.html">the candidates at 46% each</a>, while polls in seven key battleground states – Wisconsin, Michigan, Pennsylvania, Nevada, Arizona, Georgia and North Carolina – give Trump a narrow advantage, though usually within the margin of error.</p></li> \n <li><p><strong>What should we expect?</strong> Biden will likely be aiming to dilute criticism of his age with an energetic performance, and could be prepared to go on the offensive regarding Trump’s criminal record. Meanwhile, Trump advisers who know he needs at least some moderate voters to win will be hoping he can tone down his most virulent rhetoric, such as saying immigrants are “poisoning the blood of our country”.</p></li> \n <li><p><strong>What have the candidates been saying ahead of the debate?</strong> Trump has unleashed <a href="https://www.theguardian.com/us-news/article/2024/jun/26/trump-biden-presidential-debate">a fusillade of baseless accusations</a> against Biden and CNN moderators in a familiar rehash of tactics used in previous campaigns.</p></li> \n</ul> \n<h2><strong>Bolivia’s president sees off attempted coup after urging citizens to take to streets</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>On Wednesday, heavily armed troops, seemingly commanded by a top army general, stormed Bolivia’s government palace in <a href="https://www.theguardian.com/world/article/2024/jun/26/luis-arce-bolivia-coup">an attempted coup</a> before beating a retreat and seeing their alleged leader detained. Bolivia’s president, Luis Arce, appeared to have seen off the attempt after urging citizens in a video message to take to the streets to defend democracy.</p> \n<p>Video footage showed the president confronting Gen Juan José Zúñiga as he entered the palace and instructing him to stand his troops down: “I am your captain. Obey my orders.”</p> \n<h2><strong>In other news …</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<ul> \n <li><p><strong>Paris Hilton testified before a </strong><strong>house committee looking into strengthening child welfare protection</strong><strong> </strong>that she was “force-fed medications and sexually abused by staff” while she was<a href="https://www.theguardian.com/lifeandstyle/article/2024/jun/26/paris-hilton-testimony-congress-abuse-teen-facility"> institutionalized as a teenager</a>.</p></li> \n <li><p><strong>On Julian Assange’s first full day back in Australia, his wife, Stella Assange, urged Australian journalists </strong>to lodge freedom of information requests with the US government for details on <a href="https://www.theguardian.com/australia-news/article/2024/jun/27/julian-assange-wife-stella-foi-act-case-prison-release-plea-deal">its criminal case against her husband</a>.</p></li> \n <li><p><strong>Israel’s defence minister, Yoav Gallant, has warned that Israel’s military is capable of taking Lebanon “back to the stone age”</strong> in any war with Hezbollah militants, but is insisting his government prefers <a href="https://www.theguardian.com/world/live/2024/jun/27/israel-gaza-war-live-israel-warns-it-could-take-lebanon-back-to-the-stone-age-as-defence-minister-wraps-up-washington-trip?CMP=share_btn_url&amp;page=with%3Ablock-667cd8bc8f0879fc3d68e066#block-667cd8bc8f0879fc3d68e066">a diplomatic solution on the Israel-Lebanon border</a>.</p></li> \n</ul> \n<h2><strong>Stat of the day: Global plastic production has more than doubled over the past two decades</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>Annual global plastic production soared from 2m tonnes in 1950 to 234m tonnes in 2000. By 2019, production <a href="https://www.theguardian.com/environment/article/2024/jun/26/plastics-companies-blocking-mitigation-efforts">more than doubled to 460m </a>tonnes, with plastic pollution placing widespread burdens in US cities and states. A new report from the Center for International Environmental Law is now arguing that petrochemical producers such as ExxonMobil Chemical and Shell Polymers, and disposable plastic goods producers such as Coca-Cola, PepsiCo and Unilever, should be held responsible.</p> \n<h2><strong>Don’t miss this: Inside the DMZ as tensions between North and South Korea rise</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>Tensions between North and South Korea <a href="https://www.theguardian.com/world/article/2024/jun/27/north-south-korea-dmz-balloons-tensions">have risen in recent weeks</a>, with the North sending thousands of balloons across the border to scatter manure, cigarette butts, used batteries, cloth scraps and wastepaper on South Korean streets, and defector groups in the South sending back balloons of leaflets and USB sticks loaded with K-pop and K-dramas designed to undermine the legitimacy of the North’s leader, Kim Jong-un. Residents of the South Korean village of Daeseong-dong – the only inhabited area in the demilitarized zone (DMZ) – are nervous. “What if something happens? It’s always on our minds,” said one farmer, Park Se-un.</p> \n<h2><strong>… or this: The man who has led Hezbollah to the brink of war with Israel</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>Hezbollah has transformed under the leadership of general secretary, Hassan Nasrallah, both as a fighting force and in its relationship with the fragile Lebanese state. While Nasrallah’s rhetoric may have remained unchanged over the years, his appreciation of the fragility of power, even for the world’s most powerfully armed non-state actor, has mutated. With Hezbollah sending rockets and drones into Israel, and Israel hitting Lebanon and Hezbollah targets with airstrikes, Nasrallah is leading Hezbollah to the <a href="https://www.theguardian.com/world/article/2024/jun/27/hassan-nasrallah-hezbollah-leader-profile">brink of what could be its most serious conflict</a>. The question now is what does Nasrallah want – and how far he is in control of any outcome.</p> \n<h2><strong>Climate check:</strong> <strong>The world’s first emissions tax on agriculture</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>The government in Denmark will set the <a href="https://www.theguardian.com/world/article/2024/jun/26/flatulent-livestock-to-incur-green-levy-in-denmark-from-2035">world’s first emissions tax on agriculture</a>, requiring farmers to pay for the planet-heating pollutants that their cattle expel as gas. While agriculture is responsible for about one-third of planet-heating pollution – about half of which comes from animals such as cattle that emit methane gas when digesting food – lawmakers have long been reluctant to rein in its emissions. Angry farmers have brought traffic to a standstill in European capitals several times this year in sometimes violent protests.</p> \n<p>“This is a historic compromise that sets a completely new direction for land use,” said Maria Reumert Gjerding, the president of the Danish Society for Nature Conservation. “Despite major disagreements, we have managed to reach a compromise on a carbon tax that paves the way for a transformed food industry – also beyond 2030.”</p> \n<h2><strong>Last Thing: Acting in a video game</strong></h2>'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>Tom Regan spoke to the stars of the YouTube D&amp;D series Natural Six – Harry McEntire, Doug Cockle and Ben Starr – about the challenges and joys of <a href="https://www.theguardian.com/games/article/2024/jun/27/act-in-a-video-game-harry-mcentire-doug-colckle-ben-starr-">voice acting in video games</a>, essentially being a part of creating characters for roles than can stretch to 40 hours of invisible screen time.</p> \n<p>“It is bizarre,” Cockle said. “You just have to be in the character in that moment in that world, in your brain. On stage and screen, you have other actors, you have props, costumes … all these things that are helping you do this thing called ‘acting’. When you’re a voice actor, it’s just you in the booth and the director and the engineer on the other side of a glass wall, eating Jelly Babies.”</p> \n<h2><strong>Sign up</strong></h2>'
                  }
                },
                {
                  type: 'embed',
                  assets: [],
                  embedTypeData: {
                    html: '<iframe src="https://www.theguardian.com/email/form/plaintone/4300" height="52px" data-form-title="A different kind of daily email" data-form-description="Sign up and get a daily US news briefing from the Guardian" scrolling="no" seamless frameborder="0" class="iframed--overflow-hidden email-sub__iframe js-email-sub__iframe js-email-sub__iframe--article" data-form-success-desc="Thanks, you\'ll start getting the US morning briefing soon."></iframe>',
                    safeEmbedCode: true,
                    alt: 'Sign up for the US morning briefing',
                    isMandatory: false,
                    source: 'The Guardian',
                    sourceDomain: 'theguardian.com',
                    caption: 'Sign up for the US morning briefing'
                  },
                  tracking: {
                    tracks: 'does-not-track'
                  }
                },
                {
                  type: 'text',
                  assets: [],
                  textTypeData: {
                    html: '<p>First Thing is delivered to thousands of inboxes every weekday. If you’re not already signed up, <a href="https://www.theguardian.com/info/2018/sep/17/guardian-us-morning-briefing-sign-up-to-stay-informed">subscribe now</a>.</p> \n<h2><strong>Get in touch</strong></h2> \n<p>If you have any questions or comments about any of our newsletters please email <a href="mailto:newsletters@theguardian.com">newsletters@theguardian.com</a></p>'
                  }
                }
              ]
            }
          ]
        }
      },
      isHosted: false,
      pillarId: 'pillar/news',
      pillarName: 'News'
    }
  }
}

const articlesResponse = {
  response: {
    status: 'ok',
    userTier: 'developer',
    total: 169452,
    startIndex: 11,
    pageSize: 10,
    currentPage: 2,
    pages: 16946,
    orderBy: 'relevance',
    results: [
      {
        id: 'us-news/article/2024/jun/27/first-thing-biden-and-trump-prepare-for-tv-debate',
        type: 'article',
        sectionId: 'us-news',
        sectionName: 'US news',
        webPublicationDate: '2024-06-27T11:05:02Z',
        webTitle: 'Biden and Trump prepare to debate | First Thing',
        webUrl:
          'https://www.theguardian.com/us-news/article/2024/jun/27/first-thing-biden-and-trump-prepare-for-tv-debate',
        apiUrl:
          'https://content.guardianapis.com/us-news/article/2024/jun/27/first-thing-biden-and-trump-prepare-for-tv-debate',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'business/article/2024/jun/23/take-the-heat-out-of-the-hybrid-working-debate',
        type: 'article',
        sectionId: 'business',
        sectionName: 'Business',
        webPublicationDate: '2024-06-23T16:19:44Z',
        webTitle: 'Take the heat out of the hybrid working debate | Letter',
        webUrl:
          'https://www.theguardian.com/business/article/2024/jun/23/take-the-heat-out-of-the-hybrid-working-debate',
        apiUrl:
          'https://content.guardianapis.com/business/article/2024/jun/23/take-the-heat-out-of-the-hybrid-working-debate',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'politics/article/2024/jun/22/brexit-keir-starmer-eu',
        type: 'article',
        sectionId: 'politics',
        sectionName: 'Politics',
        webPublicationDate: '2024-06-22T15:52:52Z',
        webTitle:
          'Reopening Brexit debate would bring ‘turmoil’, says Keir Starmer',
        webUrl:
          'https://www.theguardian.com/politics/article/2024/jun/22/brexit-keir-starmer-eu',
        apiUrl:
          'https://content.guardianapis.com/politics/article/2024/jun/22/brexit-keir-starmer-eu',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'politics/article/2024/jun/18/channel-4-election-debate-reaches-new-depths-of-futility',
        type: 'article',
        sectionId: 'politics',
        sectionName: 'Politics',
        webPublicationDate: '2024-06-18T20:22:29Z',
        webTitle:
          'Election TV debates set new standards in diminishing returns | John Crace',
        webUrl:
          'https://www.theguardian.com/politics/article/2024/jun/18/channel-4-election-debate-reaches-new-depths-of-futility',
        apiUrl:
          'https://content.guardianapis.com/politics/article/2024/jun/18/channel-4-election-debate-reaches-new-depths-of-futility',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'us-news/article/2024/jul/05/kamala-harris-memes-coconut-tree',
        type: 'article',
        sectionId: 'us-news',
        sectionName: 'US news',
        webPublicationDate: '2024-07-05T12:17:32Z',
        webTitle:
          '#KHive: Kamala Harris memes abound after Joe Biden’s debate disaster',
        webUrl:
          'https://www.theguardian.com/us-news/article/2024/jul/05/kamala-harris-memes-coconut-tree',
        apiUrl:
          'https://content.guardianapis.com/us-news/article/2024/jul/05/kamala-harris-memes-coconut-tree',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'wellness/article/2024/jun/07/work-out-alone-v-partner',
        type: 'article',
        sectionId: 'wellness',
        sectionName: 'Wellness',
        webPublicationDate: '2024-06-07T16:00:21Z',
        webTitle: 'The debate: is working out with other people beneficial?',
        webUrl:
          'https://www.theguardian.com/wellness/article/2024/jun/07/work-out-alone-v-partner',
        apiUrl:
          'https://content.guardianapis.com/wellness/article/2024/jun/07/work-out-alone-v-partner',
        isHosted: false,
        pillarId: 'pillar/lifestyle',
        pillarName: 'Lifestyle'
      },
      {
        id: 'us-news/article/2024/aug/15/vp-debate-walz-vance-project-2025',
        type: 'article',
        sectionId: 'us-news',
        sectionName: 'US news',
        webPublicationDate: '2024-08-15T15:37:44Z',
        webTitle:
          'Walz to grill Vance on Project 2025 in first vice-presidential debate',
        webUrl:
          'https://www.theguardian.com/us-news/article/2024/aug/15/vp-debate-walz-vance-project-2025',
        apiUrl:
          'https://content.guardianapis.com/us-news/article/2024/aug/15/vp-debate-walz-vance-project-2025',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'us-news/article/2024/jul/01/replace-biden-democratic-governors',
        type: 'article',
        sectionId: 'us-news',
        sectionName: 'US news',
        webPublicationDate: '2024-07-01T15:28:20Z',
        webTitle:
          'Democratic governors reportedly waiting in wings after dire Biden debate',
        webUrl:
          'https://www.theguardian.com/us-news/article/2024/jul/01/replace-biden-democratic-governors',
        apiUrl:
          'https://content.guardianapis.com/us-news/article/2024/jul/01/replace-biden-democratic-governors',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'politics/article/2024/jun/04/election-edition-itv-leaders-debate-sunak-starmer',
        type: 'article',
        sectionId: 'politics',
        sectionName: 'Politics',
        webPublicationDate: '2024-06-04T15:44:03Z',
        webTitle:
          'Campaign catchup: Debate looming, Farage soaking, Whitby Woman rebelling',
        webUrl:
          'https://www.theguardian.com/politics/article/2024/jun/04/election-edition-itv-leaders-debate-sunak-starmer',
        apiUrl:
          'https://content.guardianapis.com/politics/article/2024/jun/04/election-edition-itv-leaders-debate-sunak-starmer',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      },
      {
        id: 'politics/article/2024/jun/06/bring-on-rob-brydon-for-the-bbc-leaders-debate',
        type: 'article',
        sectionId: 'politics',
        sectionName: 'Politics',
        webPublicationDate: '2024-06-06T16:57:19Z',
        webTitle:
          'Bring on Rob Brydon for the BBC leaders’ debate | Brief letters',
        webUrl:
          'https://www.theguardian.com/politics/article/2024/jun/06/bring-on-rob-brydon-for-the-bbc-leaders-debate',
        apiUrl:
          'https://content.guardianapis.com/politics/article/2024/jun/06/bring-on-rob-brydon-for-the-bbc-leaders-debate',
        isHosted: false,
        pillarId: 'pillar/news',
        pillarName: 'News'
      }
    ]
  }
}

const badArticleResponse = {
  response: {
    status: 'error',
    message: 'The requested resource could not be found.'
  }
}

export const handlers = [
  http.get(articlesRequestUrl, ({ params }) => {
    return new Response(JSON.stringify(articlesResponse), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }),
  http.get(articleRequestUrl, ({ params }) => {
    return new Response(JSON.stringify(articleResponse), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }),
  http.get(badArticleRequestUrl, ({ params }) => {
    return new Response(JSON.stringify(badArticleResponse), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 404
    })
  })
]
