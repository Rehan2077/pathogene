import { ArrowRight, Brain, Database, Microscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-row items-center">
              <div className="flex w-full flex-col justify-center space-y-4 md:w-[72%]">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                    <span className="relative mb-3 inline-block">
                      <span className="relative z-10">PathoGene:</span>
                      <span className="absolute -bottom-2 left-0 z-0 h-1 w-full rounded-full bg-emerald-500"></span>
                    </span>
                    <br /> Predicting the Pathogenicity of DNA Mutations
                  </h1>
                  <p className="text-muted-foreground max-w-[600px] md:text-xl">
                    Advanced AI-powered platform for analyzing genetic mutations
                    and predicting their potential to cause disease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/test">
                    <Button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/image.webp"
                  width={200}
                  height={200}
                  alt="DNA Helix Visualization"
                  className="hidden rounded-lg object-cover md:block"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full bg-emerald-50 py-12 md:py-24 lg:py-32 dark:bg-emerald-950/20"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="dark:bg-emerald-800:30 inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powerful Genetic Analysis Tools
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PathoGene combines cutting-edge machine learning with
                  comprehensive genetic databases to deliver accurate
                  pathogenicity predictions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Microscope className="mb-2 h-10 w-10 text-emerald-600" />
                  <CardTitle>Mutation Analysis</CardTitle>
                  <CardDescription>
                    Analyze DNA mutations with precision and identify potential
                    disease-causing variants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Our platform supports multiple mutation types including
                    SNPs, indels, and structural variants across the genome.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="mb-2 h-10 w-10 text-emerald-600" />
                  <CardTitle>Comprehensive Database</CardTitle>
                  <CardDescription>
                    Access a vast repository of annotated genetic variants and
                    their clinical significance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Integrated with ClinVar, COSMIC, gnomAD, and other major
                    genetic databases for comprehensive analysis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="mb-2 h-10 w-10 text-emerald-600" />
                  <CardTitle>AI Prediction</CardTitle>
                  <CardDescription>
                    Leverage advanced machine learning models to predict
                    pathogenicity with high accuracy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Our models are trained on millions of validated variants to
                    provide reliable predictions for novel mutations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full pt-12 md:pt-24">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="dark:bg-emerald-800:30 inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  From DNA to Diagnosis
                </h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process makes genetic analysis accessible to
                  researchers and clinicians alike.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="dark:bg-emerald-800:30 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:text-emerald-300">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Select Genome Assembly</h3>
                    <p className="text-muted-foreground text-sm">
                      Choose from available genome assemblies to begin exploring
                      genetic data.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="dark:bg-emerald-800:30 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:text-emerald-300">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Load Chromosomes</h3>
                    <p className="text-muted-foreground text-sm">
                      System loads chromosome data associated with the selected
                      genome assembly.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="dark:bg-emerald-800:30 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:text-emerald-300">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Search or Browse Genes</h3>
                    <ul className="list-inside list-disc">
                      <li className="text-muted-foreground text-sm">
                        <span className="font-semibold">Search by Gene: </span>
                        Enter gene name (e.g., BRCA1) to locate it directly.
                      </li>
                      <li className="text-muted-foreground text-sm">
                        <span className="font-semibold">
                          Browse by Chromosome:{" "}
                        </span>
                        View all genes within a specific chromosome.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="dark:bg-emerald-800:30 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:text-emerald-300">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Select Gene</h3>
                    <p className="text-muted-foreground text-sm">
                      Choose the target gene to analyze based on search or
                      browsing results.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <div className="dark:bg-emerald-800:30 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:text-emerald-300">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Run Variant Analysis</h3>
                    <p className="text-muted-foreground text-sm">
                      Initiate analysis on variants within the selected gene
                      using advanced computational tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
