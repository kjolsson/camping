import { mount } from '@vue/test-utils'
import restBooking from '@/components/restBooking'
import asideBookings from '@/components/asideBookings'
test('Check if booking went through', async () => {

  const aside = mount(asideBookings)
  const msg = 'Alex'

  const wrapper = mount(restBooking, {
    props: { msg }
  })
  
  await wrapper.get('[id="new-value"]').setValue('Bord 1 kl 14:00')
  await wrapper.get('[id="forname"]').setValue('Alex')
  await wrapper.get('[id="lastname"]').setValue('Eriksson')
  await wrapper.find('#submit').trigger('click')
  
  expect(aside.text()).toMatch(msg)

})