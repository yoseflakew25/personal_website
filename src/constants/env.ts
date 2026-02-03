import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    NOCODE_API_KEY: z.string().default(''),
    NOCODE_TAB_ID: z.string().default(''),
  },
  client: {
    NEXT_PUBLIC_GISCUS_REPO_ID: z.string().default(''),
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: z.string().default(''),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NOCODE_API_KEY: process.env.NOCODE_API_KEY,
    NOCODE_TAB_ID: process.env.NOCODE_TAB_ID,

    NEXT_PUBLIC_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  },
})
