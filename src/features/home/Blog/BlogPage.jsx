import React from 'react'
import BlogCard from './BlogCard';
const BlogPage = () => {
  const posts = [
    {
      title: "টেকসই কৃষি চর্চার ভূমিকা",
      description: "টেকসই কৃষি একটি প্রাকৃতিক সম্পদ সংরক্ষণ পদ্ধতি যা পরিবেশ, অর্থনীতি এবং সমাজের ওপর ইতিবাচক প্রভাব ফেলে। এই পোস্টে আমরা টেকসই কৃষির মৌলিক দিকগুলি আলোচনা করবো, যেমন ফসলের ঘূর্ণন, জৈব কৃষি, এবং মাটির সংরক্ষণ।\n\nফসলের ঘূর্ণন প্রক্রিয়া মাটির উর্বরতা বজায় রাখতে সাহায্য করে এবং কীটপতঙ্গের আক্রমণ কমায়। এটি পরিবেশের জন্য উপকারী কারণ এটি মাটির পুষ্টি বজায় রাখে। জৈব কৃষি কোন রাসায়নিক সার বা কীটনাশক ব্যবহার না করেই ফসল উৎপাদন করে, যা খাদ্য শৃঙ্খল এবং পরিবেশের জন্য নিরাপদ। মাটির সংরক্ষণ পদ্ধতি যেমন মালচিং, কনট্যুর প্লাওয়িং এবং কভার ক্রপিং মাটির ক্ষয় রোধ করে এবং মাটির আর্দ্রতা বজায় রাখে।\n\nএই চর্চাগুলি শুধুমাত্র পরিবেশ সংরক্ষণই নয়, বরং কৃষকদের আয়ের স্থিতিশীলতাও নিশ্চিত করে। টেকসই কৃষি চর্চা বাস্তবায়ন করতে হলে কৃষকদের প্রশিক্ষণ ও সচেতনতা বৃদ্ধি জরুরি।",
      youtubeLink: "https://www.youtube.com/embed/aDF3Khvhlpg?si=_WXbPVL_hHpml1Uc"
    },
    {
      title: "মাটি ব্যবস্থাপনার কার্যকরী কৌশল",
      description: "মাটির স্বাস্থ্য উন্নয়ন এবং ফসলের ফলন বাড়ানোর জন্য বিভিন্ন মাটি ব্যবস্থাপনা কৌশল প্রয়োগ করা যেতে পারে। এই পোস্টে আমরা মাটি পরীক্ষা, জৈব পদার্থের অন্তর্ভুক্তি, এবং ক্ষয় নিয়ন্ত্রণ কৌশলগুলি নিয়ে আলোচনা করবো।\n\nমাটি পরীক্ষা একটি গুরুত্বপূর্ণ পদক্ষেপ যা মাটির পুষ্টি এবং অন্যান্য গুণাবলী নির্ধারণ করতে সাহায্য করে। এর মাধ্যমে আপনি জানতে পারবেন মাটির কোন পুষ্টি উপাদানগুলি কম এবং কীভাবে সেগুলি বৃদ্ধি করা যায়। জৈব পদার্থ যেমন কম্পোস্ট এবং পশুর সার মাটির উর্বরতা বৃদ্ধি করে এবং ক্ষয় নিয়ন্ত্রণে সহায়ক। কনট্যুর প্লাওয়িং এবং মালচিং ক্ষয় নিয়ন্ত্রণের জন্য কার্যকরী কৌশল যা মাটির আর্দ্রতা বজায় রাখতে সাহায্য করে।\n\nএই কৌশলগুলি প্রয়োগ করে আপনি মাটির স্বাস্থ্য উন্নয়ন করতে পারেন এবং দীর্ঘমেয়াদে উচ্চ ফলন নিশ্চিত করতে পারেন।",
      youtubeLink: "https://www.youtube.com/embed/jo8Joe8XOB4?si=AylG6tcsev80naXC"
    },
    {
      title: "ফসলের ঘূর্ণন কৌশল",
      description: "ফসলের ঘূর্ণন কৌশলগুলি মাটির উর্বরতা বজায় রাখার পাশাপাশি কীটপতঙ্গ এবং রোগ প্রতিরোধ করতে সাহায্য করে। এই পোস্টে আমরা কীভাবে একটি কার্যকর ফসল ঘূর্ণন পরিকল্পনা তৈরি করা যায় তা নিয়ে আলোচনা করবো।\n\nফসলের ঘূর্ণন প্রক্রিয়া মূলত বিভিন্ন প্রকার ফসল একই জমিতে পর্যায়ক্রমে চাষ করা। উদাহরণস্বরূপ, একটি মরসুমে ধান চাষ করার পরে পরবর্তী মরসুমে ডাল ফসল চাষ করা যেতে পারে। এই পদ্ধতিটি মাটির পুষ্টি বজায় রাখতে এবং কীটপতঙ্গের আক্রমণ কমাতে সাহায্য করে। ফসল ঘূর্ণন কৌশল ব্যবহার করলে মাটির স্বাস্থ্য এবং উর্বরতা বৃদ্ধি পায়, যা দীর্ঘমেয়াদে উচ্চ ফলন নিশ্চিত করে।\n\nফসলের ঘূর্ণন পরিকল্পনা তৈরি করতে হলে প্রথমে জমির প্রকার, মাটির গুণাবলী, এবং প্রয়োজনীয় পুষ্টি উপাদান বিবেচনা করতে হবে। এরপর বিভিন্ন প্রকার ফসল নির্বাচন করতে হবে যা মাটির জন্য উপকারী এবং একই সাথে বাণিজ্যিকভাবে লাভজনক।",
      youtubeLink: "https://www.youtube.com/embed/9R7lZ8VqZeM?si=jLJMvY8snB6W5UAE"
    },
    {
      title: "জৈব কৃষি মূলসূত্র",
      description: "জৈব কৃষি হল একটি কৃষি পদ্ধতি যা রাসায়নিক সার এবং কীটনাশক ব্যবহার না করেই ফসল উৎপাদন করে। এই পোস্টে আমরা জৈব কৃষির মূল নীতিমালা এবং চর্চাগুলি নিয়ে আলোচনা করবো, যেমন প্রাকৃতিক সার ব্যবহার, প্রাকৃতিক কীটপতঙ্গ নিয়ন্ত্রণ পদ্ধতি, এবং সার্টিফিকেশন প্রয়োজনীয়তা।\n\nজৈব কৃষিতে প্রাকৃতিক সার যেমন কম্পোস্ট, ভার্মিকম্পোস্ট, এবং সবুজ সার ব্যবহার করা হয় যা মাটির পুষ্টি বৃদ্ধি করে। প্রাকৃতিক কীটপতঙ্গ নিয়ন্ত্রণ পদ্ধতি যেমন বায়োলজিক্যাল কন্ট্রোল এজেন্ট ব্যবহার করে কীটপতঙ্গ নিয়ন্ত্রণ করা হয়। জৈব সার্টিফিকেশন পেতে হলে নির্দিষ্ট নিয়মাবলী মেনে চলতে হয় এবং তা নিশ্চিত করার জন্য নিয়মিত পরিদর্শন করা হয়।\n\nজৈব কৃষি পদ্ধতি অনুসরণ করে আপনি স্বাস্থ্যকর এবং পরিবেশ বান্ধব খাদ্য উৎপাদন করতে পারেন যা বাজারে উচ্চমূল্য পায়। এছাড়াও, এটি মাটি এবং পরিবেশ সংরক্ষণে সহায়ক।",
      youtubeLink: "https://www.youtube.com/embed/jo8Joe8XOB4?si=AylG6tcsev80naXC"
    },
    {
      title: "সমন্বিত কীটপতঙ্গ ব্যবস্থাপনা (IPM) কৌশল",
      description: "সমন্বিত কীটপতঙ্গ ব্যবস্থাপনা (IPM) একটি পদ্ধতি যা বিভিন্ন ধরনের কৌশল ব্যবহার করে কীটপতঙ্গ নিয়ন্ত্রণ করে এবং পরিবেশগত প্রভাব কমায়। এই পোস্টে আমরা বিভিন্ন IPM কৌশল নিয়ে আলোচনা করবো, যেমন জৈবিক নিয়ন্ত্রণ, শারীরিক নিয়ন্ত্রণ, এবং রাসায়নিক নিয়ন্ত্রণ।\n\nজৈবিক নিয়ন্ত্রণ পদ্ধতিতে কীটপতঙ্গের প্রাকৃতিক শত্রু যেমন পোকামাকড় এবং রোগজীবাণু ব্যবহার করা হয়। শারীরিক নিয়ন্ত্রণ পদ্ধতিতে কীটপতঙ্গের প্রবেশ বা বিস্তার রোধ করা হয়, যেমন জাল বা ব্যারিয়ার ব্যবহার। রাসায়নিক নিয়ন্ত্রণ পদ্ধতিতে পরিবেশ বান্ধব এবং নিরাপদ কীটনাশক ব্যবহার করা হয় যা শুধুমাত্র কীটপতঙ্গকে লক্ষ্য করে এবং অন্যান্য জীব ও পরিবেশের উপর প্রভাব ফেলে না।\n\nIPM কৌশল ব্যবহার করলে আপনি কীটপতঙ্গ নিয়ন্ত্রণ করতে পারেন এবং একই সাথে পরিবেশ সংরক্ষণে সহায়তা করতে পারেন। এটি ফসলের স্বাস্থ্য এবং ফলন বৃদ্ধিতে সহায়ক।",
      youtubeLink: "https://www.youtube.com/embed/aDF3Khvhlpg?si=_WXbPVL_hHpml1Uc"
    }
  ];
  
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
    </div>
  )
}

export default BlogPage;