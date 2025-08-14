import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import wheelGesturesPlugin from 'embla-carousel-wheel-gestures';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, ExternalLink, Calendar, Users, Code, Zap } from "lucide-react";

import SwiftStockImg from "@/assets/images/SwiftStock.png";
import DiffDiveImg from "@/assets/images/DiffDive.png";
import VibeVerseImg from "@/assets/images/301Project.png";
import MotionDetectorImg from "@/assets/images/MotionDetector.png";
import CryptoPredictorImg from "@/assets/images/CryptoApp.png";
import WeatherForecastImg from "@/assets/images/WeatherForecastApp.png";
import RayTracerImg from "@/assets/images/RayTracer.png";
import TweetManagerImg from "@/assets/images/TweetManger.png";
import NeuroLensImg from "@/assets/images/NeuroLens.png";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1); 
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  
    const projects = [
  
    {
      title: "DiffDive – AI-Augmented Code Review & Commit Automation",
      description: "A GitHub App + FastAPI service that parses diffs, generates high-signal commit messages, and posts PR reviews with model-driven insights. Deployed on Render with Firebase Firestore for durable, queryable telemetry.",
      longDescription: "DiffDive is a diff-aware assistant that plugs directly into the developer loop. A lightweight commit hook drafts conventional commits from staged changes, while a GitHub App listens to PR webhooks, verifies HMAC, exchanges a JWT for an installation token, pulls diffs via the GitHub API, and posts short, actionable review comments. The service is fully asynchronous (FastAPI + httpx + Uvicorn) and engineered to be forgiving under load tenacity backoff, idempotent handlers, and deterministic fallbacks when model/API calls blip. Review artifacts (titles, authors, parsed stats, generated summaries) are written to Firebase Firestore for auditability and longitudinal analytics. The diff parser normalizes paths (strips a/ and b/ prefixes), reduces noise, and aggregates a single meaningful header with per-file deltas in consistent phrasing. It’s well-instrumented: Prometheus counters and latency histograms power simple per-repo rate limits and keep SLAs predictable. A Makefile setup and a one-line hook install keep onboarding to minutes, not hours.",
      image: DiffDiveImg, 
      technologies: [
        "Python", "FastAPI", "Uvicorn", "httpx", "Tenacity",
        "OpenAI API",
        "GitHub Apps", "GitHub Webhooks", "JWT + Installation Tokens",
        "Firebase Firestore", "Prometheus Metrics",
        "Pytest", "Ruff", "Black", "Mypy", "Makefile"
      ],
      github: "https://github.com/IAMMUNIBMIR/DiffDive",
      demo: "", 
      featured: true,
      stats: { stars: 0, forks: 0 }, 
      highlights: [
        "End-to-End GitHub App Integration (JWT → Installation Token → REST)",
        "AI Commit Messages via zero-friction git hook (git commit -a -m \"\")",
        "Concise PR review comments that surface bugs/edge cases and nudge style/tests",
        "Diff-first parser: path normalization and consistent per-file deltas",
        "Operational resilience: retries with exponential backoff and deterministic fallbacks",
        "Security hardened: HMAC verification for webhooks (sha256) and least-privilege tokens",
        "Observability: Prometheus counters & latency histograms with simple per-repo rate limits",
        "Data durability: Firestore documents per PR for auditing and analytics",
        "Developer experience: one-command Makefile setup and hook install",
        "Typed, linted, and tested: type hints + mypy; ruff/black; pytest with async/mocking"
      ],
      timeline: "2–3 weeks of iterative development",
      team: "Solo Project"
    },

    {
      title: "SwiftStock – Inventory Management System",
      description: "A production style, serverless inventory app built with React + TypeScript that forecasts demand, monitors live stock, and recommends smart rebalance actions. Deployed with a fully managed AWS backend.",
      longDescription: "SwiftStock is a full-stack inventory management system that pairs a modern React/TypeScript UI with an AWS serverless backend (Lambda, API Gateway, DynamoDB, SNS). It provides live stock visibility, SKU-level demand forecasts, risk flags, and an optimization engine that generates actionable rebalance plans. The app ships without user accounts to keep demo setup frictionless; seed scripts populate realistic data so recruiters can explore capabilities immediately. The frontend uses TanStack Query for reactive data fetching, shadcn/ui for polished components, and Recharts for visualizations. Infrastructure is defined with AWS CDK and instrumented with X-Ray-friendly handlers for easy tracing.",
      image: SwiftStockImg,
      technologies: [
        "React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui",
        "TanStack Query", "Recharts",
        "AWS Lambda", "API Gateway", "DynamoDB", "SNS", "AWS CDK", "Python"
      ],
      github: "https://github.com/IAMMUNIBMIR/SwiftStock",
      demo: "https://swiftstock-munib.netlify.app",
      featured: true,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Serverless Architecture (Lambda/APIGW/DynamoDB)",
        "Demand Forecasting & Risk Alerts",
        "Rebalance Optimization with Publishable Plans",
        "Real-time UX with React Query",
        "Infrastructure as Code (AWS CDK)",
        "Seeded Demo Data & Scripts"
      ],
      timeline: "4 weeks",
      team: "Solo Project"
    },

    {
      title: "NeuroLens – Brain MRI Tumor Classifier",
      description:
        "Streamlit app for 4-class brain MRI tumor classification with IG & SHAP explanations, DICOM support, telemetry, and PDF reporting.",
      longDescription:
        "End-to-end, clinician-friendly demo: upload PNG/JPG or full DICOM series, run TensorFlow/Keras models (Custom CNN, Xception), visualize Integrated Gradients & SHAP overlays, track p50/p95 latency and softmax KL-drift in-app, and export a polished PDF report. Includes secure model delivery with SHA-256 verification, secrets-based config, progress/cancel for multi-slice analysis, and robust fallbacks (Gemini→rule-based, SHAP→IG) for reliability.",
      image: NeuroLensImg,
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Streamlit",
        "NumPy",
        "OpenCV",
        "Plotly",
        "pydicom",
        "ReportLab",
        "imageio",
        "SHAP",
        "Integrated Gradients"
      ],
      github: "https://github.com/IAMMUNIBMIR/NeuroLens",
      demo: "https://neurolens-munib.streamlit.app",
      featured: true,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "4-class tumor classification (Glioma, Meningioma, No tumor, Pituitary)",
        "Explainability overlays: Integrated Gradients & SHAP (with IG fallback)",
        "DICOM ingestion: slice ordering, per-slice normalization, volume→GIF export",
        "In-app telemetry: requests, p50/p95 latency, softmax KL-drift + CSV export",
        "Secure model delivery: secrets-based URLs with SHA-256 checksum verification",
        "UX polish: friendly secret/file-size guards, progress + cancel for multi-slice runs",
        "PDF reporting with prediction, class-probability table, and visuals",
        "Focused pytest suite (DICOM mocks, GIF/CSV smoke tests, metrics normalization)"
      ],
      timeline: "1 week",
      team: "Solo Project"
    },

    {
      title: "VibeVerse – Mood Tracking Social App",
      description:
        "Android app that blends mood journaling with a social feed, maps, and insights, built with clean OOP and reusable components.",
      longDescription:
        "Built by a 6-person team for CMPUT 301, VibeVerse lets users log moods with photos, time, and geolocation, then explore trends and interact via comments/replies. Implements modular OOP, RecyclerView-based UIs, and location features for a smooth experience. Project is private due to course licensing; demos on request.",
      image: VibeVerseImg,
      technologies: ["Android", "Java", "Firebase Auth", "Cloud Firestore", "MPAndroidChart", "Material Components", "RecyclerView"],
      github: null,
      demo: null,
      featured: false,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Clean OOP architecture with reusable views",
        "Mood logs with photo, geo, timestamp",
        "Interactive social feed & notifications",
        "Custom filters and emotion trend insights",
        "Agile sprints; scalable logic separation"
      ],
      timeline: "Term Project",
      team: "6-person team (CMPUT 301)"
    },

    {
      title: "Motion Detector – Email-Alert Webcam Surveillance",
      description:
        "Lightweight Flask + OpenCV app that watches your webcam and emails a snapshot when motion stops.",
      longDescription:
        "A minimal, configurable motion-detection tool that runs locally. Uses threaded image processing and a simple Flask server; emails a captured frame after motion ceases so you avoid spammy bursts. Easy to run and customize.",
      image: MotionDetectorImg,
      technologies: ["Python", "Flask", "OpenCV", "Threading", "SMTP"],
      github: "https://github.com/IAMMUNIBMIR/Motion-Detector",
      demo: "https://munibsmotiondetector.netlify.app/",
      featured: false,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Real-time motion detection",
        "Post-event snapshot via email",
        "Threaded processing for responsiveness",
        "Minimal setup & config"
      ],
      timeline: "1 week",
      team: "Solo Project"
    },

    {
      title: "Crypto Predictor – ML-Based Price Forecasts",
      description:
        "Streamlit app that trains LightGBM on recent data to forecast prices for 200+ cryptocurrencies with interactive charts.",
      longDescription:
        "Pulls live and historical data, fits LightGBM regressors, and visualizes past vs. predicted trajectories with Plotly. Includes a simple mode switch for historical view vs. forecast mode. A foundation for deeper feature engineering and error analysis.",
      image: CryptoPredictorImg,
      technologies: ["Python", "Streamlit", "LightGBM", "Plotly", "CoinGecko API"],
      github: "https://github.com/IAMMUNIBMIR/Crypto-Prediction",
      demo: "https://app-crypto-3ztzbtrgcfqsnapufmsfbc.streamlit.app",
      featured: false,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Covers 200+ top coins",
        "Next-4-month forecasts with LightGBM",
        "Interactive Plotly visuals",
        "Historic vs. prediction mode switch"
      ],
      timeline: "2 weeks",
      team: "Solo Project"
    },

    {
      title: "Weather Forecast – Streamlit + OpenWeather",
      description:
        "Clean, dark-themed weather dashboard with 5-day forecasts and icon-rich sky conditions.",
      longDescription:
        "A friendly Streamlit app powered by OpenWeatherMap. Enter a location, choose forecast duration, and explore temperature trends or sky conditions via Plotly. Good demo of API work + lightweight UI polish.",
      image: WeatherForecastImg,
      technologies: ["Python", "Streamlit", "OpenWeatherMap API", "Plotly"],
      github: "https://github.com/IAMMUNIBMIR/Weather-Forecast-app",
      demo: "https://iammunibmir-weather-forecast-app-main-zzt3wh.streamlit.app/",
      featured: false,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Real-time fetch with location input",
        "5-day forecast and current conditions",
        "Temperature trendlines & sky icons",
        "Custom dark UI styling"
      ],
      timeline: "1 week",
      team: "Solo Project"
    },

    {
      title: "Ray Tracer – Pure C Renderer",
      description:
        "From-scratch ray-sphere renderer in C that outputs raw PPM images—no graphics libraries.",
      longDescription:
        "Implements vector math, ray casting, lighting, and basic shading with careful memory management. Parses a simple scene file and writes pixels directly, demonstrating systems-level thinking and graphics fundamentals.",
      image: RayTracerImg,
      technologies: ["C"],
      github: "https://github.com/IAMMUNIBMIR/Ray-Tracer",
      demo: null,
      featured: false,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Manual vector ops & intersections",
        "Shadows, lighting, anti-aliasing",
        "PPM output with file I/O",
        "Modular C with dynamic memory"
      ],
      timeline: "2 weeks",
      team: "Solo Project"
    },

    {
      title: "Tweet Manager – MongoDB CLI",
      description:
        "Command-line toolkit to ingest, query, and compose tweets at scale on MongoDB.",
      longDescription:
        "Schema-flexible storage with fast aggregations and an interactive CLI for searching, listing, and composing content. Useful for quick analytics pipelines or sentiment exploration.",
      image: TweetManagerImg,
      technologies: ["Python", "MongoDB"],
      github: "https://github.com/IAMMUNIBMIR/TweetManager-MongoDB.git",
      demo: null,
      featured: false,
      stats: { stars: 0, forks: 0 },
      highlights: [
        "Aggregation pipelines for fast queries",
        "Modular, discoverable CLI commands",
        "Search, list, and compose flows",
        "Scale-friendly, schema-less design"
      ],
      timeline: "1 week",
      team: "Solo Project"
    }
  ];

  // Get first 3 projects as main projects
  const mainProjects = projects.slice(0, 3);
  // Rest of the projects for carousel (6 projects)
  const carouselProjects = projects.slice(3, 9);

  const ProjectDetailsModal = ({ project }: { project: any }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold gradient-text">{project.title}</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <img 
          src={project.image || "/placeholder.svg"} 
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        

        <div>
          <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Key Responsibilities & Achievements</h3>
          <ul className="space-y-3">
            {project.highlights?.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Code className="w-3 h-3 mr-1" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
          {project.demo && (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </DialogContent>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work and personal projects
          </p>
        </div>

        {/* Main Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Main Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className={`group shadow-card border-border/50 hover-lift overflow-hidden opacity-0 animate-fade-in-scale animate-delay-${(index + 1) * 100} cursor-pointer`}>
                      <div className="relative">
                        <img 
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {project.featured && (
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Badge className="bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-4 pt-2">
                        <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button variant="default" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <ProjectDetailsModal project={project} />
              </Dialog>
            ))}
          </div>
        </div>

        {/* Other Projects Carousel */}
        {carouselProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  slidesToScroll: 1,
                  containScroll: "trimSnaps"
                }}
                plugins={[autoplay.current, wheelGesturesPlugin({ forceWheelAxis: "x" })]}
                onPointerDownCapture={autoplay.current.stop}
                onWheelCapture={() => autoplay.current.stop()}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent className="-ml-4 overflow-visible overscroll-x-contain select-none cursor-grab">
                  {carouselProjects.map((project, index) => {
                    return (
                      <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 min-w-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="relative group cursor-pointer h-full">
                              <Card className="h-[520px] flex flex-col shadow-card border-border/50 overflow-hidden transition-transform">
                                <div className="relative">
                                  <img 
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform-gpu group-hover:scale-105"
                                  />
                                </div>
                                <CardHeader className="pb-2">
                                  <CardTitle className="font-bold text-lg">
                                    {project.title}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4 flex flex-col grow">
                                  <p className="text-muted-foreground text-xs line-clamp-3">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                      <Badge key={techIndex} variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                    {project.technologies.length > 3 && (
                                      <Badge variant="outline" className="text-xs">
                                        +{project.technologies.length - 3}
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="flex gap-2 pt-2 mt-auto">
                                    <Button variant="outline" size="sm" asChild className="flex-1" onClick={(e) => e.stopPropagation()}>
                                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4" />
                                      </a>
                                    </Button>
                                    {project.demo && (
                                      <Button variant="default" size="sm" asChild className="flex-1" onClick={(e) => e.stopPropagation()}>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                          <ExternalLink className="w-4 h-4" />
                                        </a>
                                      </Button>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </DialogTrigger>
                          <ProjectDetailsModal project={project} />
                        </Dialog>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
