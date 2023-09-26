const express = require('express');


var articles = [
    {
        title: 'Tour the inner solar system',
        img: 'space.jpg',
        info:`Mercury is the least explored terrestrial or “rocky” planet in our solar system. Previously NASA’s only encounters with the innermost planet were the three flybys performed in 1974 and 1975 by the Mariner 10 mission that mapped 45 percent of the planet’s surface. In January 2008, the MESSENGER spacecraft flew by Mercury for its first of three fly-bys.  As it begins to reveal the planet’s composition and history,  it will in turn,  help scientists understand more about our home planet and its place in the inner solar system.`
    },
    {
        title: 'The Race to Save Yellowknife From Raging Wildfires',
        img: 'wildfire.webp',
        info:`WHEN JAY BULCKAERT answered his phone, he was standing in a fire break clearing brush in Kam Lake, just outside of Yellowknife, the capital city of Canada’s Northwest Territories. Just miles away, a massive wildfire is stalking the city and threatening to move closer as the winds shift. Thousands of people have left Yellowknife since an evacuation order was announced Wednesday evening. Not Bulckaert, though, nor the other volunteers who showed up Friday morning to do whatever they could to stop the fire from razing the city of 20,000. “It’s all hands on deck,” he says.`
    },
    {
        title:'How Amazon’s In-House First Aid Clinics Push Injured Employees to Keep Working',
        img:'amazon.webp',
        info:`AS AN OUTBOUND packer at an Amazon warehouse in St. Peters, Missouri, Jennifer Crane has 37 seconds to assemble a cardboard box, retrieve a product from a shelf, plop it in said box, stuff it full of packing material, seal it, slap on a tracking label, and finally hoist it onto a conveyor belt. Then she has to do it all over again, for 10 hours. Last October, a case of sparkling water became her undoing.

        While lifting the case, Crane says, she felt a searing pain tear down her left arm into her fingertips. She visited Amazon’s on-site first aid clinic, known as AmCare or the Wellness Center, where she says staff told her she had a small sprain and would be fine and gave her an ice pack. “I sat in there for 20 minutes until the ice pack got warm,” Crane says, by which time her shift was ending. When she got in her car to drive to work the next morning, her left hand couldn’t grip the steering wheel. Nonetheless, she says, a clinic staffer told her she needed to get back to work.
        
        `
    }
]
var blogs = [
    {
        atitle: 'Tour the inner solar system',
        img: 'space.jpg',
        desc: 'Take a deep dive into the rocky planets that make up our local neighborhood.',
    },
    {
        atitle: 'CLIMATE CRISIS',
        img: 'wildfire.webp',
        desc: 'The Race to Save Yellowknife From Raging Wildfires',
    },
    {
        atitle:'HARD LABOR',
        img:'amazon.webp',
        desc:'How Amazon’s In-House First Aid Clinics Push Injured Employees to Keep Working'
    }
];

const home = (req, res) => {
    res.render('index', {
        title: 'Home',
        blog: blogs
    });
};

const articleinfo = (req, res) => {
    const articleIndex = parseInt(req.query.article); 
    if (articleIndex >= 0 && articleIndex < articles.length) {
      const article = articles[articleIndex];
      res.render('article-info', { article });
    } else {
      // Handle invalid article index or show an error page
      res.status(404).send('Article not found');
    }
  };


module.exports = { home ,articleinfo};
