import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactMe: React.FC = () => {

  return (
    <section className="card p-5 md:p-10 flex flex-col md:flex-row gap-12 rounded-lg">
      <div className="md:w-1/2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Connect!
          </h1>
          <p className="text-md md:text-lg text-gray-400">
            Whether you're looking to collaborate on a project, discuss an
            opportunity, or just say hello I'd love to hear from you. Reach out
            anytime and let's build something great together.
          </p>
        </div>
      </div>

      <div className="md:w-1/2">
        <form 
          action="https://formsubmit.co/wilfredomarinay@gmail.com" 
          method="POST"
          className="flex-1 flex flex-col gap-4"
        >
          <input type="hidden" name="_subject" value="New message from Portfolio!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="flex-1 p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-2 focus:outline-primary outline-1 outline-primary"
            />
            <Input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="flex-1 p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-2 focus:outline-primary outline-1 outline-primary"
            />
          </div>

          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="flex-1 p-3 border border-gray-300 rounded-sm bg-white text-gray-800 focus:outline-2 focus:outline-primary outline-1 outline-primary"
          />

          <Textarea
            name="message"
            placeholder="Hello..."
            rows={5}
            required
            className="w-full p-3 border border-gray-300 rounded-sm bg-white text-gray-800 outline-1 outline-primary focus:outline-2 focus:outline-primary resize-none"
          />

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-purple-600 cursor-pointer font-medium py-3 rounded-lg transition-colors"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
