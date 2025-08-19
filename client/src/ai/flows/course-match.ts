// src/ai/flows/course-match.ts
'use server';
/**
 * @fileOverview A course recommendation AI agent.
 *
 * - courseMatch - A function that handles the course recommendation process.
 * - CourseMatchInput - The input type for the courseMatch function.
 * - CourseMatchOutput - The return type for the courseMatch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { CourseMatchInputSchema } from '@/ai/schemas';

export type CourseMatchInput = {
  description: string;
};

export type CourseMatchOutput = {
  suggestions: {
    courseName: string;
    universityName: string;
    matchScore: number;
    rationale: string;
  }[];
};

export async function courseMatch(input: CourseMatchInput): Promise<CourseMatchOutput> {
  const res = await fetch('http://localhost:9000/api/recommendations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error('Failed to fetch recommendations');
  return res.json();
}