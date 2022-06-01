import { shallowMount } from '@vue/test-utils'
import TentBooking from '@/components/TentBooking.vue'

describe('look for string', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Boka boende'
    const wrapper = shallowMount(TentBooking, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
