/* eslint-disable */
let timerId = null

module.exports = {
  start: (time) => {
    console.log('timer started')
    // timerId = setInterval(this.job, time)
  },
  job: () => {
    console.log('Job done')
  },
  reschedule: () => {
    console.log('rescheduled')
  }
}