const mountComponent = (Component, props = {}, el = null) =>
  new Component({
    propsData: props,
  }).$mount(el);

export const createComponentWithStore = (Component, store, propsData = {}) =>
  new Component({
    store,
    propsData,
  });

export const mountComponentWithStore = (Component, { el, props, store }) =>
  new Component({
    store,
    propsData: props || {},
  }).$mount(el);

export const mountComponentWithSlots = (Component, { props, slots }) => {
  const component = new Component({
    propsData: props || {},
  });

  component.$slots = slots;

  return component.$mount();
};

export default mountComponent;
