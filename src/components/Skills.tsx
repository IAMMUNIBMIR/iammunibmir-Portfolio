import { Badge } from '@/components/ui/badge';

const Skills = () => {
const skills = [
  // Programming Languages
  "Python",
  "C",
  "C#",
  "Java",
  "JavaScript",
  "TypeScript",

  // Front-End / UI
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "Lucide-React",
  "Vite",
  "Recharts",

  // Back-End / Full-Stack
  "Node.js",
  "FastAPI",
  "Flask",

  // Databases & Querying
  "SQL",
  "PostgreSQL",
  "DynamoDB",
  "Firebase Firestore",
  "MongoDB",

  // Cloud, Observability & Deployment
  "AWS CDK",
  "AWS Lambda",
  "API Gateway",
  "AWS SNS",
  "AWS X-Ray",
  "Render",
  "Netlify",
  "Boto3",

  // Version Control, CI/CD & Tooling
  "Git",
  "GitHub Actions",
  "Git LFS",
  "Makefiles",

  // Machine Learning & Data Science
  "TensorFlow",
  "Keras",
  "NumPy",
  "OpenCV",
  "Nibabel",
  "imageio",
  "SHAP",
  "Integrated Gradients",

  // AI / Generative
  "OpenAI API",

  // Python Ecosystem
  "Requests",
  "Pillow",
  "ReportLab",

  // Visualization & Reporting
  "Plotly",
  "Streamlit",

  // Mobile / Android
  "Android (Java)",
  "Google Maps SDK",

  // VR / 3D
  "VR Environment Development",
  "Unity",
  "XR Interaction Toolkit",

  // Systems & Infra Extras
  "SMTP",
  "Multithreading (Python)",

  // Testing & Quality
  "pytest",
  "mypy",
  "Ruff",
  "Black",
];


  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="flex gap-3 p-3 flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className={`opacity-0 animate-fade-in-scale animate-delay-${(index + 1) * 100}`}>
              <div className="flex h-12 items-center justify-center rounded-full bg-card/50 backdrop-blur-sm border border-border/50 px-6 hover-lift transition-all-smooth hover:border-primary/50 hover:bg-primary/10 hover:scale-105">
                <p className="text-foreground text-sm font-medium leading-normal">{skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;