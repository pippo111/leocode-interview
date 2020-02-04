/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { Page } from '.'

const ChildComponent = () => <div>Hello leo!</div>

describe('Page', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Page><div>Hello</div></Page>)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders page title with child component', () => {
    const pageTitle = 'Test title'

    const wrapper = mount(
      <Page title={pageTitle}>
        <ChildComponent />
      </Page>
    )

    expect(wrapper.find('h1').text()).toEqual(pageTitle)
    expect(wrapper.find(ChildComponent).length).toEqual(1)
  })
})
