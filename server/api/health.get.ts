export default defineEventHandler(() => {
  const { v } = useDb().prepare('SELECT sqlite_version() AS v').get() as { v: string }
  return { status: 'ok', sqlite: v, time: new Date().toISOString() }
})
