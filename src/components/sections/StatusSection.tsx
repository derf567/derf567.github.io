import { Activity, Coffee, Code, Zap } from "lucide-react";

const stats = [
  { icon: Code, label: "Projects Completed", value: "9+" },
  { icon: Coffee, label: "Technologies", value: "12+" },
  { icon: Zap, label: "Years of Study", value: "4" },
  { icon: Activity, label: "Published Papers", value: "1" },
];

const StatusSection = () => {
  return (
    <section id="status" className="section-padding bg-white animate-fade-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-semibold text-sm">07.</span>
          <h2 className="text-2xl md:text-3xl font-bold">Current Status</h2>
          <div className="h-px flex-1 bg-border max-w-[200px]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-700 font-semibold">Available for Work</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">Open to Opportunities</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Currently seeking internship and full-time opportunities in software development, 
            AI/ML research, and healthcare IT. Interested in roles involving web development, 
            computer vision, or full-stack positions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatusSection;
