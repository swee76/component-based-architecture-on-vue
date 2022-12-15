<template>
  <div>
    <GreetVue name="Bruce" hero-name="Batman" />
    <GreetVue name="Clark" hero-name="Spiderman" />
    <GreetVue name="Diana" hero-name="Wonder Woman" />

    <GreetVue :name="name" :hero-name="channel" />
    <PropTypesAndValidations
      title="Let's learn props types"
      :likes="50"
      :isPublished="true"
    />
    <NonPropAttributes
      id="myArticle"
      title="Learn Non prop attributes"
      :likes="32"
      :isPublished="false"
    />
    <!-- This doen't print anything on the browser -->
    <h1>App component username - {{ username }}</h1>
    <!-- If we bind the provide value using a data property username can print -->
    <!-- <h1>App component username - {{ name }}</h1> -->
    <!-- And making provide username: this.name -->
    <!-- Above statement breakes the code -->

    <!-- After making the provide as a function, it can take the this.name value from data property -->
    <h1>App component username - {{ name }}</h1>
    <ProvideAndInject />
    <h2>Popup Component - Custom Component - Events</h2>
    <ComponentEvents />
    <ComponentsAndVModel />
    <div>
      <h2>Learn on Slots</h2>
      <AboutSlots />
    </div>
    <h3>Component Styles</h3>
    <h4>App Component Text</h4>
    <ChildStyles />

    <h3>slot and component styles</h3>
    <ChildStyles><h4>Child Component Styles with slot</h4></ChildStyles>

    <h3>Dynamic Components</h3>
    <DynamicComponents />

    <h3>Learn about Teleport Component</h3>
    <teleport to="#portal-root">
      <TeleportComponent />
    </teleport>

    <h3>HTTP Get Request - axios</h3>
    <PostList />

    <h3>HTTP Post Request - axios</h3>
    <CreatePost />

    <h1>Lifecycle Hooks</h1>
    <ParentComponent />

    <PostListonPageLoad />
    <h3>Learn on Template Ref</h3>
    <TemplateRef />

    <h3>Reusability with Mixins</h3>
    <ClickCounter />
    <HoverCounter />

    <h3>Replacing Data with Ref</h3>
    <DataComponent />

    <h3>Replacing Data With Reactive</h3>
    <ReplacingDataWithReactive />

    <h3>Reactivity and toRefs</h3>
    <DemoOne />
    <DemoTwo />

    <h3>Replacing Methods</h3>
    <MethodsComponent />

    <h3>V model and Composition API</h3>
    <VModel />

    <h3>Repalcing Computed Properties</h3>
    <ComputedPeroperties />

    <h3>Replacing Watchers</h3>
    <WatchersComponent />

    <h3>Replacing Provide and Inject</h3>
    <ProvideInject />
  </div>
</template>

<script>
import GreetVue from "./components/Greet.vue";
import PropTypesAndValidations from "./components/PropTypesAndValidations.vue";
import NonPropAttributes from "./components/NonPropAttributes.vue";
import ProvideAndInject from "./components/ProvideAndInject.vue";
import ComponentEvents from "./components/Custom-Component-Events/ComponentEvents.vue";
import ComponentsAndVModel from "./components/Components-and-V-model/ComponentsAndVModel.vue";
import AboutSlots from "./components/AboutSlots.vue";
import ChildStyles from "./components/ComponentStyles/ChildStyles.vue";
import DynamicComponents from "./components/Learn-Dynamic-Components/DynamicComponents.vue";
import TeleportComponent from "./components/Learn-Teleport-Component/TeleportComponent.vue";
import PostList from "./components/HTTP-Get-Request/PostList.vue";
import CreatePost from "./components/HTTP-Post-Request/CreatePost.vue";
import ParentComponent from "./components/LifeCycle-Hooks/Parent.vue";
import PostListonPageLoad from "./components/Get-Request-on-Page-Load/PostListOnPageLoad.vue";
import TemplateRef from "./components/Learn-on-TemplateRef/TemplateRef.vue";
import ClickCounter from "./components/Reusability-with-Mixins/ClickCounter.vue";
import HoverCounter from "./components/Reusability-with-Mixins/HoverCounter.vue";
import DataComponent from "./components/Learn-Composition-API/Data.vue";
import ReplacingDataWithReactive from "./components/Learn-Composition-API/ReplacingDataWithReactive.vue";
import DemoOne from "./components/Reactivity-and-toRefs/DemoOne.vue";
import DemoTwo from "./components/Reactivity-and-toRefs/DemoTwo.vue";
import MethodsComponent from "./components/Replacing-Methods/Methods.vue";
import VModel from "./components/VModel-and-Composition-API/VModel.vue";
import ComputedPeroperties from "./components/Replacing-Computed-Properties/Computed.vue";
import WatchersComponent from "./components/Replacing-Watchers/Watch.vue";
import ProvideInject from "./components/Replacing-Provide-and-Inject/ProvideInject.vue";
export default {
  name: "App",
  components: {
    GreetVue,
    PropTypesAndValidations,
    NonPropAttributes,
    ProvideAndInject,
    ComponentEvents,
    ComponentsAndVModel,
    AboutSlots,
    ChildStyles,
    DynamicComponents,
    TeleportComponent,
    PostList,
    CreatePost,
    ParentComponent,
    PostListonPageLoad,
    TemplateRef,
    ClickCounter,
    HoverCounter,
    DataComponent,
    ReplacingDataWithReactive,
    DemoOne,
    DemoTwo,
    MethodsComponent,
    VModel,
    ComputedPeroperties,
    WatchersComponent,
    ProvideInject,
  },
  data() {
    return {
      name: "Vishwas",
      channel: "Code Academy",
    };
  },

  // If only we have to pass the provide prop along the component tree,  use provide as an object
  // provide: {
  //   username: "Vishwas",
  // },

  // if we have to use that property inside the same component also, use provide as a function
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style scoped>
basically 
/* This scoped attribute is basically used for apply the relevant styles only for the correspond component   */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h4 {
  color: orange;
}
</style>
