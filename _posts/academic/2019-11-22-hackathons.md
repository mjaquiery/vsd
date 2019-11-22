---
layout: post
title:  "Hackathons"
date:   2019-11-22 12:09:10 +0000
category: academic
tags: [open science, transparency, hackathon, teamwork, dementia, task switching, psychology, neuroscience, psychopathology]
image: 
    path: /assets/images/brainhack-oxbridge-2019.jpg-small.jpg
    height: 192
---

Over the last two weeks I've spent approximately half my time travelling to and attending a pair of three-day hackathons, one in Norwich at the University of East Anglia, and one in Cambridge. 

A 'hackathon' is an event where a group of people work together to produce a rough-and-ready version of some project within a highly constrained time. You know when you manage to find time without any distractions to get a really solid block of work done on a task? It's like that but with a group of people all working on the same task.[^1] They can be different lengths, have groups of different sizes, and be more or less accompanied by an organised structure. The two I attended were 3-day events with teams of 2-6 or so people per project.

## [Dementias Portal UK Datathon](https://www.dementiasplatform.uk/upcoming-events/dpuk-datathon-2013-uea)

{% include image.html url="dpuk-uea.jpg" alt="Presenting at the DPUK Datathon" description="I introduce our presentation on sample attrition at the end of the three days.<br/>Credit: <a href=\"https://twitter.com/S_Bauermeister\">@S_Bauermeister</a>." %}

The first hackathon, a DPUK Datathon at the University of East Anglia,[^2] brought together data scientists and psychiatrists to explore datasets which might shed some predictive or explanatory light on dementia. Dementia is an increasingly common debilitating condition[^3] which is only going to increase with life expectancy.[^4] It's also a condition which is incredibly hard to predict until the onset of rapid cognitive decline, making preventative approaches difficult to implement or explore.

So, we have an important condition which we don't know enough about, a shedload of data which might be relevant, and a few dozen experts in the condition and in analysing large quantities of data. Throw them together for a few days and hope something workable comes out the other end. The difficulties for this project arose primarily in the kind of data available. 

> To consult the statistician after an experiment is finished is often merely to ask him to conduct a post mortem examination. He can perhaps say what the experiment died of. 
#### [Ronald Fisher](https://en.wikiquote.org/wiki/Ronald_Fisher)[^5]

Not to put too Fisherian a point on it, the data provided were not the kind you'd pick if you were starting out with the aim of predicting dementia 20 years into the future. There were three datasets available, one with a vast array of measures for 20 people with early clinical dementia with assessments over about a year, one with an intimidating array of questionnaire measures collected for around 10,000 people over a decade (including dementia diagnoses), and one recording detailed health and dietary information for around 700 men[^6] in a Welsh village every 5 or so years for two decades. 

None of these datasets is ideal for studying dementia, not least because it's sufficiently rare that even in a sample of 10,000 only a few people are liable to develop the condition. Add to that the general statistical and machine learning problems of variable fidelity - how sure are we that a diagnosis of dementia actually tracks the real-world outcome we want to predict - and we're deep into speculative territory no matter how clever we are with the data. With these caveats in mind, there were definitely some innovative approaches presented at the end of the three days.

One group analysed how the predictors of dementia changed over time using linear regression; a point backed up by work from another group showing how a Bayesian network decomposition of risk factors altered its structure once time of diagnosis was included. The point was summarised neatly by one attendee: _the predictors of whether or not you will develop dementia in the future are very different to the predictors of whether or not you have dementia now_.

My project involved working with two young researchers from UEA on exploring the attrition in the samples as a function of cognitive decline. We only analysed the second dataset properly, but we did demonstrate that lower cognitive capacity was associated with a lower probability of remaining in the sample at the time of the next survey. The finding itself was not especially surprising, but the point is important: if you're attempting to model cognitive decline you need to be able to detect it, so if lower cognitive functioning is a risk factor for dropping out you need to measure cognitive functioning frequently enough to detect declines before people drop out.

It was particularly rewarding to know that many of the frustrations and issues encountered by us all in parsing the data into usable form are exactly the areas which DPUK are aiming to address. They're hoping to improve the ease with which each of their many datasets[^7] can be used, and eventually to bring them all into a standardized format where they can be compared with one another and used interoperably.

## [Brainhack Oxbridge 2019](https://oxbridgebrainhack.github.io/)

{% include image.html url="brainhack-oxbridge-2019.jpg" alt="The participants of Oxbridge BH2019" description="The obligatory group photo. I'm hiding as usual.<br/>Credit: <a href=\"https://twitter.com/BrainhackOxCam\">@BrainhackOxCam</a>." %}

This hackathon took place the week after the DPUK datathon. It was hosted in a Makespace[^8] in central Cambridge and attracted a few dozen young researchers, predominantly involved in neuroimaging work. Several interesting projects were proposed, including exploring the complexity of neural signatures in dementia, examining connectome[^9] harmonics under anaesthesia, automatic labelling of sulcal brain areas, and programming an experimental task in [Python](https://www.python.org/).

The main project I involved myself with was programming the Task Switching experiment. I'm pretty familiar with programming experiments and their peripheral structure,[^10] so for me the exercise was in a large part a refresher course in Python (plus learning [Psychopy](https://www.psychopy.org/)), and an opportunity to build a project using all the good practice stuff I've picked up over the last couple of years. It also turned out to be a good opportunity to help a couple of people learn Python (and programming in general), and to help a new PhD student with a much-needed task construction. 

The group I was working with were dedicated and friendly, as were all the people I met there, in fact.[^11] Between the four of us we represented five universities (including someone who joined the [Sackler Centre](http://www.sussex.ac.uk/sackler/) in Sussex after I left!), and the project lead, Danielle, made the programming task fairly straightforward by having designed the experiment to the minutest detail. As with every project proposed, the initial aims were wildly optimistic (we completed three quaters of one bullet point), but we did produce a working demo of the task in the time allowed.[^12]

{% include image.html url="brainhack-oxbridge-2019-presentation.jpg" alt="My group presents" description="The end of my group's presentation at the end of the three days.<br/>Credit: <a href=\"https://twitter.com/BrainhackOxCam\">@BrainhackOxCam</a>." %}

## Environment, exhaustion, networking

I could probably write a whole post in the [personal](/categories.html#personal) section about the experiences, but they can be summed up pretty succinctly:
* I met a lot of smart and dedicated people in both places
* I find working in the same room as other people for days together exhausting[^13] and get about as much done in the few hours on my own in the evening as during the day
* If you're arranging accommodation for people for a 3-day event which starts at 9am, you should probably extend the accommodation to cover the night before the first day, otherwise people can't travel by public transportation
* It'd be a good idea to figure out some kind of exercise opportunity to work into the event, because 3 days is a long time to go without
* I think I made a (good?) impression on people, I certainly tried to be kind and engaged (which mostly wasn't hard), and I don't have anything which is clearly bugging me about whether I misinterpreted things or said the wrong things or any of that stuff, so I'm pretty happy about that[^14]
* If the above is networking then I managed that. But if it's not then I'm still not quite sure what it is

---

## Notes

[^1]: Yes, I find people a distraction in and of themselves. Yes, these events are often liberally interrupted by coffee breaks, lunch breaks, lectures, tutorials, social evenings, etc. etc., but the ostensible focus on a given project is usually still there somewhere.

[^2]: The University of East Anglia is the home of the [Sainsbury Centre for Visual Arts](https://sainsburycentre.ac.uk/), which is creepy and wonderful in equal measure. It's like a cabinet inside the [Pitt-Rivers Museum](https://www.prm.ox.ac.uk/) was expanded Iron Man-UI style and spread out over the entire floor of an old aircraft hanger desperately trying not to look like an old aircraft hanger. 

[^3]: There is certainly room to debate the affective and phenomenological consequences of dementia, but however it is managed it requires society to devote a great deal of time, emotion, and money to supporting those affected.

[^4]: As with other disorders associated with old age, premature death and the things that cause premature death need to be controlled for. In naive analyses smoking is a good protector against dementia...

[^5]: I am not a statistician.

[^6]: [Caroline Criado-Perez](https://www.carolinecriadoperez.com/books) would not be happy.

[^7]: DPUK curate rather than own data. It's all rather complex, but they and the data providers are all working to make it easier for the data to yield the insights they were collected to provide.

[^8]: A shared workshop filled with 3d printers, machining tools, saws, electrical engineering equipment, sewing machines, etc.

[^9]: The connectome is a map of connectivity between areas of the brain. Some evidence suggests that the way areas of the brain influence one another changes in conjunction with changes in consciousness, including under the influence of anaesthetics or psychadelics. 

[^10]: How experimental trials are arranged and deployed, which data are stored and how they are saved, etc. These things are easy to overlook until you have to commit to an approach by starting to write your program.

[^11]: Hackathon participants are liable to be a pretty sternly self-selecting sample.

[^12]: As much as I have too many projects to work on already, I'm pleased to have picked up a collaboration to continue helping to develop this project.

[^13]: At least a couple of other attendees mentioned the exhausting nature of the networking and socialising to me at both events. Whether those same people actually attended the social events in the evenings, I couldn't say.

[^14]: Of course if I _did_ screw anything up I'd like to know - better to receive feedback to help improve next time...