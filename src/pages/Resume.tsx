import { motion } from "framer-motion";
import jsPDF from "jspdf";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
};

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const contentWidth = pageWidth - 2 * margin;
      let y = 20;

      // Helper function to add text
      const addText = (text: string, size: number, style: string = "normal", color: number[] = [0, 0, 0]) => {
        pdf.setFontSize(size);
        pdf.setFont("helvetica", style);
        pdf.setTextColor(color[0], color[1], color[2]);
        pdf.text(text, margin, y);
        y += size * 0.5;
      };

      const addCenteredText = (text: string, size: number, style: string = "normal") => {
        pdf.setFontSize(size);
        pdf.setFont("helvetica", style);
        const textWidth = pdf.getTextWidth(text);
        pdf.text(text, (pageWidth - textWidth) / 2, y);
        y += size * 0.5;
      };

      const addLine = () => {
        pdf.setDrawColor(150, 150, 150);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 5;
      };

      // Header
      pdf.setTextColor(0, 0, 0);
      addCenteredText("WILFREDO G. MARINAY JR", 18, "bold");
      addCenteredText("Full Stack Developer | Computer Science Student", 11, "normal");
      y += 2;
      pdf.setFontSize(9);
      const contact = "wilfredomarinay@gmail.com • +639917222460 • derf567.github.io";
      const contactWidth = pdf.getTextWidth(contact);
      pdf.text(contact, (pageWidth - contactWidth) / 2, y);
      y += 6;

      addLine();

      // Professional Summary
      pdf.setTextColor(128, 0, 128);
      addText("PROFESSIONAL SUMMARY", 11, "bold", [128, 0, 128]);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(9);
      const summary = "Computer Science student specializing in full-stack development with proven experience in healthcare IT and justice system projects. Strong technical foundation across modern web and mobile technologies with commitment to clean code and continuous learning.";
      const summaryLines = pdf.splitTextToSize(summary, contentWidth);
      pdf.text(summaryLines, margin, y);
      y += summaryLines.length * 4 + 4;

      // Work Experience
      pdf.setTextColor(128, 0, 128);
      addText("WORK EXPERIENCE", 11, "bold", [128, 0, 128]);
      
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("OJT Intern - Software Developer", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.text("2025 - Present", pageWidth - margin - 30, y);
      y += 4;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text("SPMC Hospital, Davao City", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("• Developing Hospital Referral System for Mindanao region hospitals", margin + 3, y);
      y += 4;
      pdf.text("• Currently in pilot testing, full deployment scheduled April 2025", margin + 3, y);
      y += 6;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("Student Developer", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.text("2024", pageWidth - margin - 15, y);
      y += 4;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text("Hall of Justice Project", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("• Developed local system applying database management and system design skills", margin + 3, y);
      y += 6;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("Web Developer", margin, y);
      pdf.setFont("helvetica", "normal");
      pdf.text("2023 - Present", pageWidth - margin - 30, y);
      y += 4;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text("Freelance Projects", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("• Built multiple web projects with responsive designs and modern frameworks", margin + 3, y);
      y += 6;

      // Education
      pdf.setTextColor(128, 0, 128);
      addText("EDUCATION", 11, "bold", [128, 0, 128]);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("Bachelor of Science in Computer Science", margin, y);
      y += 4;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text("University of the Immaculate Conception", margin, y);
      y += 6;

      // Technical Skills
      pdf.setTextColor(128, 0, 128);
      addText("TECHNICAL SKILLS", 11, "bold", [128, 0, 128]);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "bold");
      pdf.text("Languages:", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("Python, C++, JavaScript, TypeScript, Java, PHP, Dart, Go", margin, y);
      y += 4;
      pdf.setFont("helvetica", "bold");
      pdf.text("Frontend/Mobile:", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("React, Next.js, Vue.js, Nuxt.js, Flutter, Expo, Tailwind CSS, Bootstrap", margin, y);
      y += 4;
      pdf.setFont("helvetica", "bold");
      pdf.text("Backend:", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("Node.js, Laravel, Django, NestJS, Express, Firebase, MySQL, PostgreSQL", margin, y);
      y += 4;
      pdf.setFont("helvetica", "bold");
      pdf.text("DevOps/Cloud:", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      pdf.text("Docker, GitHub Actions, Nginx, AWS, Google Cloud Platform", margin, y);
      y += 6;

      // Key Projects
      pdf.setTextColor(128, 0, 128);
      addText("KEY PROJECTS", 11, "bold", [128, 0, 128]);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("ClearSight: Forensic-Quality Surveillance Restoration", margin, y);
      y += 4;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "italic");
      pdf.text("Published Research Paper - AICCC", margin, y);
      y += 4;
      pdf.setFont("helvetica", "normal");
      const project1 = "Hierarchical framework for surveillance footage restoration using AI/ML and Computer Vision";
      pdf.text(pdf.splitTextToSize(project1, contentWidth), margin, y);
      y += 8;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.text("Hospital Referral System", margin, y);
      y += 4;
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text("Comprehensive system for Mindanao hospitals, pilot testing at SPMC", margin, y);
      y += 6;

      // Soft Skills
      pdf.setTextColor(128, 0, 128);
      addText("SOFT SKILLS", 11, "bold", [128, 0, 128]);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text("Clean code writing • Problem-solving • Team collaboration • Continuous learning", margin, y);
      y += 6;

      // Languages
      pdf.setTextColor(128, 0, 128);
      addText("LANGUAGES", 11, "bold", [128, 0, 128]);
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(9);
      pdf.text("Filipino: Native/Bilingual  |  English: Fluent", margin, y);
      y += 8;

      // Footer
      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      const footer = "Copyright © 2026 Wilfredo G. Marinay Jr";
      const footerWidth = pdf.getTextWidth(footer);
      pdf.text(footer, (pageWidth - footerWidth) / 2, pdf.internal.pageSize.getHeight() - 10);

      pdf.save("Wilfredo_Marinay_CV.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try the Print option instead.");
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      exit="exit"
    >
      <div className="py-15 md:pt-27 md:pb-7">
        <div className="py-12 min-h-screen">
          <div className="flex justify-center gap-4 mb-6 print:hidden">
            <button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded cursor-pointer transition duration-300 ease-in-out"
            >
              🖨️ Print CV
            </button>
            <button
              onClick={handleDownloadPDF}
              className="bg-primary-foreground hover:bg-primary-foreground/90 font-bold py-3 px-6 rounded cursor-pointer transition duration-300 ease-in-out"
            >
              📄 Download as PDF
            </button>
          </div>

          <div id="cv-content" className="max-w-[210mm] mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
            {/* Header */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold mb-1">WILFREDO G. MARINAY JR</h1>
              <p className="text-base text-gray-600 mb-2">Full Stack Developer | Computer Science Student</p>
              <p className="text-sm">
                wilfredomarinay@gmail.com • +639917222460 • derf567.github.io • linkedin.com/in/fred-marinay-31ab9a3a8
              </p>
            </div>

            <hr className="my-3 border-gray-400" />

            {/* Professional Summary */}
            <section className="mb-4">
              <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Professional Summary</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Computer Science student specializing in full-stack development with proven experience in healthcare IT and justice system projects. 
                Strong technical foundation across modern web and mobile technologies with commitment to clean code, best practices, and continuous learning. 
                Passionate about creating innovative solutions that solve real-world problems and make a positive impact.
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-4">
              <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Work Experience</h2>
              
              <div className="mb-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">OJT Intern - Software Developer</h3>
                  <span className="text-sm text-gray-600">2025 - Present</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-1">SPMC Hospital, Davao City</p>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  <li>Developing a comprehensive Hospital Referral System for all hospitals across Mindanao region</li>
                  <li>System currently undergoing pilot testing phase (March 2025)</li>
                  <li>Scheduled for 100% deployment and full implementation by April 2025</li>
                  <li>Working with healthcare professionals to ensure system meets clinical requirements</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">Student Developer</h3>
                  <span className="text-sm text-gray-600">2024</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-1">Hall of Justice Project</p>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  <li>Developed a local system for Hall of Justice operations (not published online)</li>
                  <li>Applied database management and programming skills in real-world scenario</li>
                  <li>Collaborated with team members on system design and implementation</li>
                </ul>
              </div>

              <div className="mb-3">
                <div className="flex justify-between">
                  <h3 className="text-sm font-semibold">Web Developer</h3>
                  <span className="text-sm text-gray-600">2023 - Present</span>
                </div>
                <p className="text-sm text-gray-600 italic mb-1">Freelance Projects</p>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  <li>Built multiple web projects including fashion blogs, restaurant websites, and educational resources</li>
                  <li>Developed responsive designs using HTML, CSS, and modern JavaScript frameworks</li>
                  <li>Created wireframes and UI/UX designs for various client projects</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="mb-4">
              <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Education</h2>
              <h3 className="text-sm font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-gray-600 mb-1">University of the Immaculate Conception</p>
              <p className="text-sm text-gray-700">Specialized in Computer Science with focus on software development and system design</p>
            </section>

            {/* Technical Skills */}
            <section className="mb-4">
              <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Programming Languages:</p>
                  <p className="text-gray-700">Python, C++, JavaScript, TypeScript, Java, PHP, Dart, Go</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Frontend & Mobile:</p>
                  <p className="text-gray-700">React, Next.js, Vue.js, Nuxt.js, Flutter, Expo, Tailwind CSS, Bootstrap, Sass</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Backend Development:</p>
                  <p className="text-gray-700">Node.js, Laravel, Django, NestJS, Express, Firebase, GraphQL, MySQL, PostgreSQL</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">DevOps & Cloud:</p>
                  <p className="text-gray-700">Docker, GitHub Actions, Nginx, AWS, Google Cloud Platform</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section className="mb-4">
              <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Key Projects</h2>
              
              <div className="mb-2">
                <h3 className="text-sm font-semibold">ClearSight: Forensic-Quality Surveillance Restoration</h3>
                <p className="text-sm text-gray-600 italic mb-1">Published Research Paper - AICCC</p>
                <p className="text-sm text-gray-700">
                  A Hierarchical Dual-Architecture Framework for Forensic-Quality Restoration of Surveillance Footage Degraded by Rain and Glare. 
                  Collaborated with team members on AI/ML and Computer Vision research.
                </p>
                <p className="text-xs text-gray-600 mt-1">Team: Justin Zack M. Doctolero, Wilfredo G. Marinay Jr., Joshua Emerson B. Valerio, Michel B. Bolo</p>
              </div>

              <div className="mb-2">
                <h3 className="text-sm font-semibold">Hospital Referral System</h3>
                <p className="text-sm text-gray-600 italic mb-1">SPMC Hospital, Davao City</p>
                <p className="text-sm text-gray-700">
                  Comprehensive referral system for all hospitals across Mindanao region. Currently in pilot testing with full deployment scheduled for April 2025.
                </p>
              </div>

              <div className="mb-2">
                <h3 className="text-sm font-semibold">Hall of Justice System</h3>
                <p className="text-sm text-gray-600 italic mb-1">Academic Project</p>
                <p className="text-sm text-gray-700">
                  Local system developed for Hall of Justice operations focusing on database management and system design.
                </p>
              </div>
            </section>

            {/* Two Column Section */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              {/* Soft Skills */}
              <section>
                <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Soft Skills</h2>
                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                  <li>Clean, efficient and documented code writing</li>
                  <li>Problem-solving and analytical thinking</li>
                  <li>Team collaboration and communication</li>
                  <li>Continuous learning and adaptability</li>
                </ul>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-base font-bold mb-2 text-purple-700 uppercase">Languages</h2>
                <p className="text-sm mb-1"><strong>Filipino:</strong> Native/Bilingual</p>
                <p className="text-sm"><strong>English:</strong> Fluent</p>
              </section>
            </div>

            <div className="text-center mt-4 pt-2 border-t border-gray-300">
              <p className="text-xs text-gray-500">Copyright © 2026 Wilfredo G. Marinay Jr</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
