import React from "react";
import BlogCard from "./BlogCard";
const BlogPage = () => {
  const posts = [
    {
      title:
        "Crop Rotation Made Simple - Rotate Your Vegetable Beds for Healthier Produce",
      description:
        "Crop rotation is key to a successful vegetable garden after the first year.  It's also difficult to organize well, particularly if you are growing different amounts of a variety of crops.  This video explains a simple colour-coded method of crop rotation that makes the whole process much simpler and shows how the Garden Planner software can help.",
      youtubeLink: "https://www.youtube.com/embed/X4DZLtdSeCM?si=3YF4Hsaj_cqCMV9A",
    },
    {
      title: "What is sustainable agriculture?",
      description: `Global food supplies are currently facing a huge challenge. As the global population rises, so too does the need for food. With a global population expected to reach 9.7 billion by 2050, according to the UN, there’s a need to increase food production by 70% in the next 30 years to ensure enough food for everyone and avoid further food insecurity
Food insecurity is becoming more recognized as a global issue that affects an estimated 750 million people.
In addition to this, the agricultural industry can have its own environmental impact.
Some problematic areas that are primed for improvement include greenhouse gases (GHGs) from food waste decomposition, the effects of fertilizer and pesticide use on wildlife and surrounding areas, the eutrophication (growth of algae in water sources leading to the eventual die-off of all fish and plants) and monoculture agriculture (where one crop is grown on the land at a time) which can lead to land degradation making the land unsuitable for further farming.
In this article on sustainable agriculture as part of our sustainability series, we’re looking at what is sustainable agriculture, the current problems with agriculture and what we can do to improve and provide some solutions in the form of Agroecology and Agtech.`,
      youtubeLink: "https://www.youtube.com/embed/dXxgrWJDbB0?si=M8X75UssaYdbg3aj",
    },
    {
      title: "What Does Organic Really Mean? Food and Farming Practices",
      description: `We are all trying to eat healthier. And the term "organic" is one of the most confusing and misunderstood words in our food world. In this video, I explain what organic really means and how it pertains to farming practices and food production.`,
      youtubeLink: "https://www.youtube.com/embed/WpKwlkXA8zA?si=OWWqJ7500t2Tni73",
    },
    {
      title:
        "Importance of Organic Farming | What is Organic Farming | Sustainable Agriculture",
      description:
        "In this video, we delve into the world of organic farming and explore the various benefits it offers for human health, the environment, and animal welfare. From the avoidance of synthetic pesticides and fertilizers to higher nutrient content, reduced risk of food contamination, and biodiversity, we examine how organic farming practices can promote sustainable agriculture, improve food quality and safety, and protect the environment. We also discuss how organic farming can offer several benefits to animal welfare, including providing access to the outdoors, avoiding the use of antibiotics and growth hormones, providing more space, reducing stress, and improving animal health. Join us as we discover the advantages of organic farming and why it is an important method of agriculture.",
      youtubeLink: "https://www.youtube.com/embed/lRyXlvIJFWI?si=3yNgi5En4j52h0Xz",
    },
    {
      title: "Area-wide Integrated Pest Management (AW-IPM)",
      description:
        "Throughout history, people have had to fight insect pests to reduce diseases, minimize food losses, protect agricultural trade or simply to avoid the nuisance of stinging, biting and buzzing bugs. Insect pest control is usually implemented locally in individual fields or properties. These uncoordinated efforts often prove inefficient since they only suppress a proportion of the targeted pest population. Pests from nearby untreated areas remain unscathed and can re-enter the treated areas, the damage continues, and people have little choice but to apply the control measures again and again to protect their livelihoods. Area-wide pest management provides a more cost-effective and sustainable approach by proactively targeting entire pest populations. In this way, pest populations can be contained at low levels for longer periods and pest management methods can be integrated that are less reliant on pesticides and that better address ecological and environmental concerns.",
      youtubeLink: "https://www.youtube.com/embed/p8kzxgYeAqQ?si=exQPWqq5CAQNIEbe",
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-xl text-blue-700 flex justify-center py-5">
        Learn from here{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
