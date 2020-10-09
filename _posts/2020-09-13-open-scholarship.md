---
layout: post
title:  "Open scholarship"
date:   2020-06-13 12:30:00 +0100
category: academic
tags: [open scholarship, open science, transparent, reproducible, replication, reproducibiliTea]
image: 
    path: /assets/images/nullius-in-verba.jpg
    height: 192
---

# Open scholarship

{% include image.html url="nullius-in-verba.jpg" alt="Nullius in Verba" description="The motto of the Royal Society, loosly translates as <em>Take nobody's word for it</em>.<br/>Photo by <a href='https://swantower.co.uk/'>swantower.co.uk</a> (CC BY-NC-ND) [cropped]."%}

Issac Newton, in a rare moment of humility, claimed to have seen further than others because he stood on the shoulders of giants.'[^1]
This quote expresses elegantly the idea that science is an incremental activity: the discoveries of the present are built upon the discoveries of the past, edging ever closer to the fundamental regularities which govern the reality we share.
The quote also does a terrible job of acknowledging the recursiveness of the process, or how important incremental advances are.
Those 'giants' so lauded in the quote are more likely to be [ordinary people standing atop one another's shoulders, wearing a giant's trench coat](https://tvtropes.org/pmwiki/pmwiki.php/Main/TotemPoleTrench) and having one middle-aged white face with grey whiskers and a self-satisfied impression taking all the credit...

The point? Science, and research and scholarship in general, are not only incremental activities, but interactive and collaborative activities.
And we know this.
We have an entire publishing industry _just for academia_, which performs quality control[^2] on academic work, and disseminates it to ~~everyone~~.
~~_Everyone who is in an academic institution._~~
_**Everyone who is in an academic institution that can afford to pay for it.**_

Back when the academic journals were the sorts of things you could thwack sluggish mice with, the cost of purchasing these publications was largely unavoidable.[^3]
Along with the rest of the world, however, academia is waking up to the idea that the marginal cost of scaling information-based activity is virtually nil.
Compared to printing out and sending 10,000 copies of an unrealistically-popular journal article, the cost of emailing the article to those 10,000 people, or of hosting it on a website where they can download it, is infinitesimal.
This freedom from marginal costs means that academic publishing can be disseminated to everybody at roughly the same cost as being disseminated to its traditional audience.
And that is the essence of open scholarship: make the products of scholarship and research available to everyone directly.[^4]

## What might open scholarship look like

Open scholarship is where we're going. 
It would mean that anything academics produce,[^5] from theories and arguments through to datasets and analysis code, from photographs and translations of ancient texts to programming tools and statistical techniques, is in the public domain. 
It means that other academics (and journalists, and everyone else) can read, check, and build upon the work.

In many areas we're already making excellent progress: while most textbooks remain for-profit enterprises, most software development by academics seems to be shared widely and freely.
Data repositories are emerging for numerous disciplines which make use of datasets.
There are parallel publication initiatives like preprints[^6] which allow traditional papers to be disseminated efficiently.
A simultaneous movement is evolving to help organise and catalogue all the extra information: e.g. new platforms like the [OSF](https://osf.io/) and guidelines for ensuring data (and everything else) are [FAIR](https://www.go-fair.org/fair-principles/) - Findable, Accessible, Interoperable, Reuseable.
Open scholarship is a world of research open to humans and machines where finding things is easy and accessing things is trivial.

## Why not open scholarship?

There are naturally some concerns and objections to open scholarship, although I do not think any of them are particularly strong challenges, and the ones which are strong challenges are not specific to open scholarship.
The first one which might spring to the mind of non-academics is "who will pay for all this?"
Well, good news - it's already paid for!
Most research is paid for by public funding bodies, and the grants awarded by these bodies are spent in part on paying academic publishers to publish the results of the scholarship.
Research institutions such as universities also pay the publishers for access to the publications.
The publishers in return perform three key functions: quality control of their output, making their output available to subscribers, and keeping non-subscribers from accessing their output.
Open scholarship means they no longer have to do the last one. 

The first objection academics often come out with when told about how the transparency open scholarship provides will help us find and fix mistakes is "but this won't stop fraud!"
That is quite true.
It also won't deliver house-trained miniature unicorns to everyone who thinks they'd make cute pets.[^7]
But then it's not supposed to.
It's certainly unlikely to make fraud _easier_, and I'm sure any academic worth their salt could detect the flaw in arguing that "X is bad, Y won't stop X, therefore we shouldn't do Y." 

### Is knowledge dangerous?

Probably the most serious objection is that some knowledge may just be dangerous.
Do we really want just anyone to be able to access information on how to build a nuclear or biological weapon?
Well, maybe.
But those weapons require some real life stuff that's actually quite hard to get hold of, so let's use a simpler example: cyber weapons.
With the right information, building a cyber weapon is (often quite literally) child's play.
A common response to the problem is to try to keep that information from getting into the 'wrong' hands.

https://stackoverflow.com/questions/533965/why-is-security-through-obscurity-a-bad-idea

    * Dangerous 
        * Abuse of research e.g. climate denial/isolated calls for rigour
        * Potential for catastrophe e.g. bioweapons, nuclear
            * Restrict access to reagents?
            * Encryption algorithms as counterexample (security through obscurity is no such thing)

### Shouldn't sharing be at the discretion of the owner?

    * Researchers' intellectual property
        * It's not (signed over to journals most of the time)
        * They're working on the taxpayer's dime
    * Nation's intellectual property 
        * Public research should be publically available
            * National funds vs international knowledge
                * Sagan light of science
                * Want to engage with other nations rationally and sharing science is best way

### Will open scholarship be a free-for-all?

    * Quality control issues
        * We may still need gatekeepers but they can gatekeep at any stage of the process
        * Assessing/synthesizing/etc. research is valuable scholarship in its own right

### How can it be done?

    * No consensus on the model
        * "The biggest mistake is doing nothing because you can only do a little."
        * Different solutions may suit different research fields, but there are broad underlying similarities

[^1]: It's always worth checking the quote you use... this one seems to stand up quite well, although the quote plays on a [much older idea](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants).

[^2]: There's a long-running debate which is growing increasingly lively of late concerning the role of peer review in academic publishing. Whether the work is necessary or unnecessary, should be paid or unpaid, conducted by peers or conducted by experts; whether reviews should be signed or unsigned, open or closed... all aspects of the process are under increasing scrutiny as newer publication models emerge. 

[^3]: By the way, you have to pay to have your paper published in a journal, too. 
So you get to pay for publishing the paper and then you get to pay again to read it.
And no, you don't get royalties or anything, either. It's neatly summed up in [this tweet](https://pbs.twimg.com/media/EWedf6AXkAUFBGi.jpg).

[^4]: Yes, as I'll mention below, we will also need methods for organising, assessing, interpreting, and synthesizing all that open scholarship, but that is no argument for keeping the basic ingredients locked away. 

[^5]: Yes, there are lots of specific examples of things where this can't or shouldn't apply, e.g. private personal information collected for research purposes. In many cases there are specific solutions for these issues, such as setting up access-controlled digital environments where qualified people can access private data. A useful heuristic is 'as open as possible, as closed as necessary'.  

[^6]: Preprints are published to a central repository before they get submitted to a journal. They are commonly manuscripts in a complete but early draft form, and are unlikely to have undergone peer review, usually meaning more expertise is required to assess the research.

[^7]: Personally, I think the horns might be a little dangerous or uncomfortable. And de-horning unicorns seems rather ludicrous. Perhaps we should aim for [petite lap giraffes](http://petslady.com/article/petite-lap-giraffes-who-wouldn-t-want-one) instead.