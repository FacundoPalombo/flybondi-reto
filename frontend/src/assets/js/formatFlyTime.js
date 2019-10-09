export const formatFlyTime = (arrival, departure) => {
  try {
    let times = ((new Date(arrival)-new Date(departure))/(3600*1000))
    .toString()
    .split(/\./)
    let time = `${times[0]}hs ${times[1].slice(0,2)}min `
    return time
  } catch (error) {
    console.error(error.message)
    return
  }
}