import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

inject({ mode: 'production' })
injectSpeedInsights({ debug: false })
