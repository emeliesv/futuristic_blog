import imageE from "../assets/EmelieFolkeIlse_S06.jpg";
import imageK from "../assets/Katniss.jpg";

const About = () => {
  return (
    <section>
      <div className="m-5">
        <h2>About Us</h2>
        <p>Welcome to Blogo, your go-to source for any topics.</p>
      </div>
      <div className="m-5">
        <h3>Our Story</h3>
        <p>
          Founded in 2024, Blogo started as a passion project by Emelie
          Svensson. What began as a small corner of the internet to share our
          thoughts and experiences has grown into a vibrant community of
          like-minded individuals who share a love for travel, technology,
          cooking, beekeeping, gardening, wine, cars or anything in between.
        </p>
        <h3>Our Mission</h3>
        <p>
          At Blogo, our mission is simple: to inspire, inform, and engage our
          readers with high-quality content that resonates with their interests
          and aspirations. We believe in the power of storytelling and the
          importance of sharing knowledge and experiences that can make a
          positive impact on our readers' lives.
        </p>
      </div>
      <div className="m-5">
        <h3>What We Offer</h3>
        <ul>
          <li>
            <span className="font-semibold">In-Depth Articles</span>
            <p>
              Our blog features a wide range of articles, from how-to guides and
              tutorials to in-depth analyses and opinion pieces. We strive to
              provide content that is not only informative but also enjoyable to
              read.
            </p>
          </li>
          <li>
            <span className="font-semibold">Expert Insights</span>
            <p>
              With contributions from industry experts and seasoned
              professionals, we offer insights that you can trust. Whether
              you're looking to learn something new or stay updated with the
              latest trends, we've got you covered.
            </p>
          </li>
          <li>
            <span className="font-semibold">Community Engagement</span>
            <p>
              We value our community and encourage active participation. Whether
              it's through comments, social media, or email, we love hearing
              from our readers and fostering meaningful discussions.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-purple-700 text-purple-50 px-4 flex flex-col items-center py-4">
        <h3>Meet The Team</h3>
        <div className="flex">
          <div className="flex flex-col w-40 mx-10">
            <div
              className="rounded-full w-40 h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${imageE})` }}
            ></div>
            <h4>Emelie</h4>
            <p className="text-sm italic font-extralight">
              Founder, contentcreator, designer and developer
            </p>
          </div>
          <div className="flex flex-col w-40 mx-10">
            <div
              className="rounded-full w-40 h-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${imageK})` }}
            ></div>
            <h4>Katniss</h4>
            <p className="text-sm italic font-extralight">Rubberduck</p>
          </div>
        </div>
      </div>

      <div className="m-5">
        <h3>Join Us On Our Journey</h3>
        <p>
          Thank you for visiting Blogo. We invite you to join us on our journey
          as we explore cool stuff. Whether you're a longtime reader or a
          first-time visitor, we hope you find our content valuable and
          inspiring. Don't forget to subscribe to our newsletter and follow us
          on social media for the latest updates and exclusive content.
        </p>
        <h3>Contact Us</h3>
        <p>
          Have questions, comments, or suggestions? Feel free to reach out to us
          via smokesignal. We love hearing from our readers and are always open
          to feedback.
          <br />
          Thank you for being a part of the Blogo community!
        </p>
      </div>
    </section>
  );
};

export default About;
