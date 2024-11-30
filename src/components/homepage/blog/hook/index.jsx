export const blogContent = () =>{
    const blogPreContent = [
        { 
            image: "/src/IMGs/We're+Hiring_Blog-01.jpg",
            title: "Do You Like to Colour Code!?",
            body: "Do you like things to be organized and orderly? Do you thrive using post-its and to-do lists? Is colour-coding your past time of choice? If so, we might have the job for you! Spark Event Management(Spark) is seeking a contract event & administrative assistant to join our team in Calgary, AB.We ask that the candidate be available for 30 - 40 hours per week for this position, starting immediately.",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Jul 8, 2019",
            id: 1
        },
        {
            image: "/src/IMGs/5+reasons+why.jpg",
            title: "5 Benefits of Attending a Conference",
            body: "Webinars and online training tools are replacing the idea of conferences and professional development events. That’s what they are saying, but we disagree! There is unique power in being connected to other people who are active in your line of work, through education and networking. I believe that professional development is best experienced in person and here's why.",
            more: "Read More →",
            writer: "Written by Kim",
            date: "Aug 10, 2018",
            id: 2
        },
        {
            image: "/src/IMGs/Earlybird-01.jpg",
            title: "The Earlybird Catches the Worm But...",
            body: "'Should we extend the earlybird deadline?' We get asked this all the time. And I'm sorry, but the answer is, 'No!' If you are finding that your marketing tactics are not drawing in registrations as fast as you hoped before the earlybird deadline, don't panic. We have some tried and true tactics that can get your registrations to that sold out scenario.",
            more: "Read More →",
            writer: "Written by Kim",
            date: "Aug 10, 2018",
            id: 3
        },
        {
            image: "/src/IMGs/Spark_Blog_Power+of+Branding.jpg",
            title: "The Power of Branding",
            body: "Just pick a type-face, slap on a bold colour, and presto you're done. Wrong. Branding is the face to your event - your big first impression. If your event branding is professional and polished, you’re also communicating that all aspects of the event will have the same attention to detail.",
            more: "Read More →",
            writer: "Written by erinn",
            date: "May 1, 2018",
            id: 4
        },
        {
            image: "/src/IMGs/Green+is+the+new+black-01.jpg",
            title: "Green is the New Black",
            body: "Throughout 2017, headlines about climate change agreements, carbon taxes, pending pipeline deals, emissions, natural disasters, melting ice caps and unpredictable weather patterns have dominated our headlines. As meeting and event leaders, a big part of our job is to engage and participate in conversations about how our events are impacting the environment.",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Apr 8, 2018",
            id: 5
        },
        {
            image: "/src/IMGs/Survival+Skills-01.jpg",
            title: "Six Spring Slaughter Survival Skills",
            body: "If you have been living under a rock and have not seen our #SparkBTS this past June, well let me fill you in. Spring is by far the busiest season for us at Spark. In true form, we like to affectionately call this Spring Slaughter. Spring Slaughter is a marathon, not a sprint. And a part of crossing the finish line, like any marathon, requires prep, pacing, and a few tricks of the trade…",
            more: "Read More →",
            writer: "Written by Kim",
            date: "Jun 30, 2016",
            id: 6
        },
        {
            image: "/src/IMGs/Client+Spotlight-01.jpg",
            title: "Managing With a Fresh Perspective at PMINAC",
            body: "There was no shortage of vibrancy and excitement in May at the Project Management Institute Northern Alberta Chapter (PMINAC) Conference. With updated branding, a new spacious venue, and a refreshed vision for a conference experience, the Spark team partnered with one of our long-time clients to make months of creative rebranding come to life.",
            more: "Read More →",
            writer: "Written by Kim",
            date: "Jul 31, 2015",
            id: 7
        },
        {
            image: "/src/IMGs/Repeat-01.jpg",
            title: "Repeat Clients... Getting To Know You!",
            body: "Anyone who lives or works in Calgary knows that during Stampede, the city morphs into a massive 10 day, cowboy-themed party. Venues, event planners, décor companies and entertainers are all booked up working long days and late hours to satisfy the demands of one of the busiest party seasons in our city. Most Stampede events and parties offer little to challenge the imagination of an event planner…",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Sep 25, 2013",
            id: 8
        },
        {
            image: "/src/IMGs/BOMA+Awards+Dinner-01.jpg",
            title: "BOMA Calgary Excellence Awards Dinner",
            body: "Last year, I attended the National CSAE Conference and had the pleasure of meeting Lia Robinson and William (Bill) Partridge from the Building Owners and Managers Association (BOMA) Calgary office. It was immediately evident to me how passionate and dedicated both Lia and Bill were to their membership and their organization.",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Jul 25, 2013",
            id: 9
        },
        {
            image: "/src/IMGs/Doing+Our+Part_Blog-01.jpg",
            title: "Doing Our Part... Western Canada In-School Settlement Conference",
            body: "Last month, we had the honour of working with the Calgary Bridge Foundation for Youth in partnership with Citizenship and Immigration Canada to put on the Western Canada In-School Settlement Conference. This conference, the first of its kind, brought together school based settlement programs and 200 in-school settlement workers from across Western Canada to develop practical skills and tools, discuss common challenges and create innovative program ideas. ",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Mar 4, 2013",
            id: 10
        },
        {
            image: "/src/IMGs/Started+with+Fries_Blog-01.jpg",
            title: "Would You Like Fries With That?",
            body: "It’s been almost 6 months since I fully launched Spark and ventured into the world of entrepreneurship on my own. Over the last 6 months, I have had a lot of family and friends ask questions like “is Spark still in business?”, “are things going okay?”, “do you have any clients?”, “Can you afford to pay the bills?” Fortunately, I get to answer “yes” to all of these questions…",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Jan 23, 2013",
            id: 11
        },
        {
            image: "/src/IMGs/Spark_Blog_Power+of+Branding.jpg",
            title: "And a Spark is Lit...",
            body: "When people ask me what I do for a living, I say I own an event management firm. 80% of the time, it leads to discussion of weddings, confetti and the latest trends in balloon animals, but I’m used to it. You see, it does not matter what people call me or what they imagine my job is like day to day, give me 5 minutes with them and they’ll never again utter the words “party planner”.  I know events can include things like confetti and balloon animals, but they are so much more than that…",
            more: "Read More →",
            writer: "Written by Anh",
            date: "Oct 29, 2012",
            id: 12
        },

    ]


    return {
        blogPreContent
    }
}