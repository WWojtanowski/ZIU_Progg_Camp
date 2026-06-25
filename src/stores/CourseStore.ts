import { create } from 'zustand';
import { persist } from 'zustand/middleware';


type CourseState =
  | "default"
  | "progress"
  | "completed"

type TestState =
  | "disabled"
  | "default"
  | "failed"
  | "completed"

interface CourseProgress {
    courseState: CourseState
    testState: TestState
    score: number | null
}

const DEFAULT_PROGRESS = {
    courseState: "default",
    testState: "disabled",
    score: null,
}



interface CourseStoreType {

    courses: Record<
        string,
        CourseProgress
    >

    setCourseState: (
        courseId: string,
        state: CourseState
    ) => void

    setTestState: (
        courseId: string,
        state: TestState
    ) => void

    setScore: (
        courseId: string,
        score: number
    ) => void

}


export const CourseStore = create<CourseStoreType>()(
    persist((set) => ({

        courses: {},

        setCourseState: (
            courseId,
            courseState
        ) => set((state: any) => ({
            courses: {
                ...state.courses,
                [courseId]: {
                    ...state.courses[courseId] ?? DEFAULT_PROGRESS,
                    courseState,
                },
            },
        })),

        setTestState: (
            courseId,
            testState
        ) => set((state: any) => ({
            courses: {
                ...state.courses,
                [courseId]: {
                    ...state.courses[courseId] ?? DEFAULT_PROGRESS,
                    testState,
                },
            },
        })),

        setScore: (
            courseId,
            score
        ) => set((state: any) => ({
            courses: {
                ...state.courses,
                [courseId]: {
                    ...state.courses[courseId] ?? DEFAULT_PROGRESS,
                    score,
                },
            },
        })),

    }),

    {
        name: "course-storage",
    })

)