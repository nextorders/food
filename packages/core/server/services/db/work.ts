export async function getWorkingDays(): Promise<WorkingWeek | null> {
  return useStorage('db').getItem<WorkingWeek>('working_time')
}

export async function changeWorkingDayActivity(day: DayCode, isActive: boolean): Promise<void> {
  const workingDays = await getWorkingDays()
  if (!workingDays) {
    return
  }

  const workingDay = workingDays.find((workingDay) => workingDay.day === day)
  if (!workingDay) {
    return
  }

  workingDay.isActive = isActive

  await useStorage('db').setItem('working_time', workingDays)
}

export async function patchWorkingDay(day: DayCode, data: Partial<WorkingDay>): Promise<WorkingWeek | null> {
  const workingDays = await getWorkingDays()
  if (!workingDays) {
    return null
  }

  const workingDay = workingDays.find((workingDay) => workingDay.day === day)
  if (!workingDay) {
    return null
  }

  const updatedDay = { ...workingDay, ...data }
  const updatedWeek = workingDays.map((workingDay) => (workingDay.day === day ? updatedDay : workingDay))

  await useStorage('db').setItem('working_time', updatedWeek)
  return getWorkingDays()
}

export async function createWorkingDays(data: WorkingWeek): Promise<WorkingWeek | null> {
  await useStorage('db').setItem('working_time', data)
  return getWorkingDays()
}
