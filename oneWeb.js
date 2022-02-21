// import {BaseComponent} from './oneCore.js';

import {oneIcons} from './oneIcons.js';
import {matchUrl, Component, BaseComponent, readFlavor, readGradient} from '@onejs-dev/onecore';
// import {Div, Option, Select, Input as input, A, Svg} from '@onejs-dev/oneweb';
import {ONESPECIFICS} from '@onejs-dev/onespecifics';

// import {getLanguage, setLanguage, updateLanguage, readText,
//         read, add, update, remove, 
//         goToState, nextState, previousState, readStateHistory,
//         BaseComponent, Component, app,
//         themeVariable, updateThemeVariable} from '@onejs-dev/onecore';

// export {getLanguage, setLanguage, updateLanguage, readText,
//         read, add, update, remove, 
//         goToState, nextState, previousState, readStateHistory,
//         BaseComponent, Component, app,
//         themeVariable, updateThemeVariable};



/*STANDARD COMPONENTS:
Html standard components to be used on the web.
Naming convention: Exact same name as the html tag with CamelCase with first letter in capital.
    -Remarks: 
    <object> is Obj not to colide with Object reserved word.
    <iframe> is IFrame
    <tbody> is TBody 
    <map> is OneMap to avoid collision with Map
    <input> is HtmlInput to avoid collision with Input
*/

/** 
* @description All the unpaired/self-closing HTML tags.
* @type {Array<String>} 
*/
export const A = BaseComponent('A', true, 'a');
export const Abbr = BaseComponent('Abbr', true, 'abbr');
export const Address = BaseComponent('Address', true, 'address');
export const Area = BaseComponent('Area', false, 'area');
export const Article = BaseComponent('Article', true, 'article');
export const Aside = BaseComponent('Aside', true, 'aside');
export const Audio = BaseComponent('Audio', true, 'audio');
export const B = BaseComponent('B', true, 'b');
export const Base = BaseComponent('Base', false, 'base');
export const Bdi = BaseComponent('Bdi', true, 'bdi');
export const Bdo = BaseComponent('Bdo', true, 'bdo');
export const Blockquote = BaseComponent('Blockquote', true, 'blockquote');
export const Body = BaseComponent('Body', true, 'body');
export const Br = BaseComponent('Br', false, 'br');
export const Button = BaseComponent('Button', true, 'button');
export const Canvas = BaseComponent('Canvas', true, 'canvas');
export const Caption = BaseComponent('Caption', true, 'caption');
export const Cite = BaseComponent('Cite', true, 'cite');
export const Code = BaseComponent('Code', true, 'code');
export const Col = BaseComponent('Col', false, 'col');
export const Colgroup = BaseComponent('Colgroup', false, 'colgroup');
export const Data = BaseComponent('Data', true, 'data');
export const Datalist = BaseComponent('Datalist', true, 'datalist');
export const Dd = BaseComponent('Dd', true, 'dd');
export const Del = BaseComponent('Del', true, 'del');
export const Details = BaseComponent('Details', true, 'details');
export const Dfn = BaseComponent('', true, 'dfn');
export const Dialog = BaseComponent('', true, 'dialog');
export const Div = BaseComponent('Div', true, 'div');
export const Dl = BaseComponent('Dl', true, 'dl');
export const Dt = BaseComponent('Dt', true, 'dt');
export const Em = BaseComponent('Em', true, 'em');
export const Embed = BaseComponent('Embed', false, 'embed');
export const Fieldset = BaseComponent('Fieldset', true, 'fieldset');
export const Figcaption = BaseComponent('Figcaption', true, 'figcaption');
export const Figure = BaseComponent('Figure', true, 'figure');
export const Footer = BaseComponent('Footer', true, 'footer');
export const Form = BaseComponent('Form', true, 'form');
export const H1 = BaseComponent('H1', true, 'h1');
export const H2 = BaseComponent('H2', true, 'h2');
export const H3 = BaseComponent('H3', true, 'h3');
export const H4 = BaseComponent('H4', true, 'h4');
export const H5 = BaseComponent('H5', true, 'h5');
export const H6 = BaseComponent('H6', true, 'h6');
export const Head = BaseComponent('Head', true, 'head');
export const Header = BaseComponent('Header', true, 'header');
export const Hr = BaseComponent('Hr', false, 'hr');
export const Html = BaseComponent('Html', true, 'html');
export const I = BaseComponent('I', true, 'i');
export const IFrame = BaseComponent('IFrame', true, 'iframe');
export const Img = BaseComponent('Img', false, 'img');
export const HtmlInput = BaseComponent('HtmlInput', false, 'input'); //"Input" is defined later in a custom way
export const Ins = BaseComponent('Ins', true, 'ins');
export const Kbd = BaseComponent('Kbd', true, 'kbd');
export const Label = BaseComponent('Label', true, 'label');
export const Legend = BaseComponent('Legend', true, 'legend');
export const Li = BaseComponent('Li', true, 'li');
export const Link = BaseComponent('Link', false, 'link');
export const Main = BaseComponent('Main', true, 'main');
export const OneMap = BaseComponent('Map', true, 'map'); //"Map", is it colliding with any reserved word?
export const Mark = BaseComponent('Mark', true, 'mark');
export const Meta = BaseComponent('Meta', true, 'Meta', false, 'meta');
export const Meter = BaseComponent('Meter', true, 'meter');
export const Nav = BaseComponent('Nav', true, 'nav');
export const Noscript = BaseComponent('Noscript', true, 'noscript');
export const Obj = BaseComponent('Object', true, 'object'); //"Obj", otherwise collides with "Object" reserved word
export const Ol = BaseComponent('Ol', true, 'ol');
export const Optgroup = BaseComponent('Optgroup', true, 'optgroup');
export const Option = BaseComponent('Option', true, 'option');
export const Output = BaseComponent('Output', true, 'output');
export const P = BaseComponent('P', true, 'p');
export const Param = BaseComponent('Param', false, 'param');
export const Picture = BaseComponent('', true, 'picture');
export const Pre = BaseComponent('Pre', true, 'pre');
export const Progress = BaseComponent('Progress', true, 'progress');
export const Q = BaseComponent('Q', true, 'q');
export const Rp = BaseComponent('Rp', true, 'rp');
export const Rt = BaseComponent('Rt', true, 'rt');
export const Ruby = BaseComponent('Ruby', true, 'ruby');
export const S = BaseComponent('S', true, 's');
export const Samp = BaseComponent('Samp', true, 'samp');
export const Script = BaseComponent('Script', true, 'script');
export const Section = BaseComponent('Section', true, 'section');
export const Select = BaseComponent('Select', true, 'select');
export const Small = BaseComponent('Small', true, 'small');
export const Source = BaseComponent('Source', false, 'source');
export const Span = BaseComponent('Span', true, 'span');
export const Strong = BaseComponent('Strong', true, 'strong');
export const Style = BaseComponent('Style', true, 'style');
export const Sub = BaseComponent('Sub', true, 'sub');
export const Summary = BaseComponent('Summary', true, 'summary');
export const Sup = BaseComponent('Sup', true, 'sup');
export const Svg = BaseComponent('Svg', true, 'svg');
export const Table = BaseComponent('Table', true, 'table');
export const TBody = BaseComponent('TBody', true, 'tbody');
export const Td = BaseComponent('Td', true, 'td');
export const Template = BaseComponent('Template', true, 'template');
export const Textarea = BaseComponent('Textarea', true, 'textarea');
export const TFoot = BaseComponent('TFoot', true, 'tfoot');
export const Th = BaseComponent('Th', true, 'th');
export const Thead = BaseComponent('Thead', true, 'thead');
export const Time = BaseComponent('Time', true, 'time');
export const Title = BaseComponent('Title', true, 'title');
export const Tr = BaseComponent('Tr', true, 'tr');
export const Track = BaseComponent('Track', false, 'track');
export const U = BaseComponent('U', true, 'u');
export const Ul = BaseComponent('Ul', true, 'ul');
export const Var = BaseComponent('Var', true, 'var');
export const Video = BaseComponent('Video', true, 'video');
export const Wbr = BaseComponent('Wbr', false, 'wbr');

// import {oneIcons} from './oneIcons.js';
// import {matchUrl, Component, BaseComponent, readFlavor, readGradient} from '@onejs-dev/onecore';
// import {Div, Option, Select, Input as input, A, Svg} from '@onejs-dev/oneweb';
// import {ONESPECIFICS} from '@onejs-dev/onespecifics';

//=============================================================================
// CUSTOM COMPONENTS:
// Provides reusable components across web and native. Consists of the following
// components:
// Input: Consolidates the different HTML types of inputs, including: textarea, 
//        selectect (optgroup and option) and range.
// Text: All the text inside of 'View'-s should be wrapped inside 'Text' component.
//       Gradient texts are supported.
// View: Base component to organize content. Containes features that allow:
//    - Responsive animations when the following properties are modified: 
//      visible and active (current url matches target url).
//      Note: Previously selected property was supported but React uses it internally.
//    - Intuitive positioning of the content, e.g.: "center-center", 
//      "column top-left", etc.
//    - Declarative routing in just by setting the url property.
// Icon: Displays and icon from the svg gallery.
//       Gradient icons are supported.
// Modal: Base component to display overlaying content.
// Slider: Creates stacked views that allow the user to slide across the component's
//         children.
//============================================================================= 

/** 
* @description Using the theme and themeSetup configuration objects creates the css classes and applies then to the DOM objects. 
* The default falvor values are set at body level.
* @param {Theme} theme - If it is a string, the oneJS theme to be used. If a theme object, the collection of flavors with the theme variables.
* @param {Object} themeSetup - The CSS in JS object applying the theme variables to the DOM objects.
* @param {Object} themeCollection - The collection of preset themes provided.
* @example
* ```javascript 
*   const theme = {default: {primaryColor: 'blue'}};
*   const themeSetup = {p: {color: themeVariable('primaryColor')}};
*   setupTheme({theme: theme, themeSetup: themeSetup});
* ```
*/
export const Text = BaseComponent('Text', true, 'p');

const inputTypes = [  'button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 
                    'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 
                    'time', 'url', 'week'];

export const Input = ({options, type, flavor=readFlavor('default'), ...attributes}={}) => {
    if(flavor) attributes['flavor'] = flavor;
    if(attributes['onPress']) {//To make it consistent across web and native. Both can use onPress or onClick
        attributes['onClick'] = attributes['onPress'];
        delete attributes['onPress'];
    }
    //Standard input
    if(!type) return HtmlInput(attributes);
    //Textarea for longer text input
    else if(type === 'textarea') {
        return Textarea(attributes)();
    }
    //Multiple choice input
    else if(type === 'select') {
        //options (array): ['Volvo', 'Mercedes', 'Rolex', 'Cartier']; //For more simple scenarios       
        if(Array.isArray(options)) {
            return Select(attributes)(options.map(item => Option({value: item})(item)));
        }
        //options (object): {cars: {volvo: 'Volvo', mercedes: 'Mercedes'}, watches: {rolex: 'Rolex', cartier: 'Cartier'}}; //Only allows 1 level of indentation
        else if(typeof options === 'object') {
            return Select(attributes)(Object.entries(options).map(([key, value]) => {
                if(value && typeof value === 'object') {
                    return Optgroup({label: key})(Object.entries(value).map(([subkey, subvalue]) => {return Option({value: subkey})(subvalue)}));
                }
                else return Option({value: key})(value);
            }));
        }
        else {
            return Select(attributes)();
        }
    }
    //Range slider input
    else if(type === 'range') {
        const min = attributes['min'] || 0;
        const max = attributes['max'] || 100;
        const value = 100.0 * (attributes['value'] - min) / (max - min);
        const style = {//Styles the right and the left side of the thumb in a different color
            background: 'linear-gradient(to right, ' + (flavor.primaryColor ??  'blue') + ' 0%, ' + (flavor.primaryColor ??  'blue')  + ' ' + 
            value + '%, ' +  (flavor.neutralColor ??  'grey') + ' ' + value + '%, ' + (flavor.neutralColor ??  'grey') + ' 100%)',
        }
        return HtmlInput({...attributes, type: type, inlineStyle: style}); //This overrides any style defined by the user
    }
    //Input with datalist options
    else if(type === 'list') {
        if(Array.isArray(options)) {
            return Select(attributes)(options.map(item => Option({value: item})(item)));
        }
    }
    //The rest of the inputs
    else {
        return HtmlInput({type: type, ...attributes});
    }
}

/** 
Definition: Animations object can be used to set default animations on attibute change events; visibility and active.
Example: view({animations: {visible: 'fade-in', 'not-visible': 'fade-out'}})('content')
**/
export const animations = {//In order for transform animations to work we need position absolute, but it is still working for some. https://www.w3schools.com/js/js_htmldom_animate.asp
    //Working for position relative and static
    'appear': {style: {display: 'flex'}},
    'disappear': {style: {display: 'none'}},
    'fade-in': {keyframes: {opacity: [0,1], 'webkit-transform': 'none'}, options: {duration: 300, easing: 'ease-in-out'}},
    'fade-in-left': {keyframes: {opacity: [0,1], transform: ['translate3d(-100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'fade-in-right': {keyframes: {opacity: [0,1], transform: ['translate3d(100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'fade-out': {keyframes: {opacity: [1,0], 'webkit-transform': 'none'}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'fade-out-left': {keyframes: {opacity: [1,0], transform: ['translate3d(-100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'fade-out-right': {keyframes: {opacity: [1,0], transform: ['translate3d(100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-in-left': {keyframes: {transform: ['translate3d(-100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-in-right': {keyframes: {transform: ['translate3d(100%, 0, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-in-up': {keyframes: {transform: ['translate3d(0, 100%, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-in-down': {keyframes: {transform: ['translate3d(0, -100%, 0)', 'none']}, options: {duration: 300, easing: 'ease-in-out'}},
    'slide-out-left': {keyframes: {transform: ['none', 'translate3d(-100%, 0, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-out-right': {keyframes: {transform: ['none', 'translate3d(100%, 0, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-out-up': {keyframes: {transform: ['none', 'translate3d(0, -100%, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'slide-out-down': {keyframes: {transform: ['none', 'translate3d(0, 100%, 0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'expand': {keyframes: {transform: ['scale(0)', 'scale(1.3)', 'scale(1)']}, options: {duration: 300, easing: 'ease-in-out'}},
    'shrink': {keyframes: {transform: ['scale(1)', 'scale(0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'vertical-expand': {keyframes: {transform: ['scaleY(0)', 'none'], margin: ['10px', 0]}, options: {duration: 300, easing: 'ease-in-out'}},
    'vertical-shrink': {keyframes: {transform: ['none', 'scaleY(0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}},
    'horizontal-expand': {keyframes: {transform: ['scaleX(0)', 'none'],  margin: ['10px', 0]}, options: {duration: 300, easing: 'ease-in-out'}},
    'horizontal-shrink': {keyframes: {transform: ['none', 'scaleX(0)']}, options: {duration: 300, easing: 'ease-in-out'}, style: {display: 'none'}}
};

/** 
Definition: This is the webcomponent used to wrap all the custom oneJS elements. It behaves like an HTML 'div' block with some additional features such as routing, animations and positioning.
Properties:
    -Visible: Used to toggle display:flex to display:none.
    -Active: If the specified url matches the actual url, the active attribute is set.
    -Selected: Can be usdd to trigger animations if the element is selected. [Deprecated - React uses internally this property]
    -Content: Specifies how the content of the element is positioned, first vertically then horizontally. E.g.: top-left. (This positioning is based on flexbox)
        -Vertically: Top, center, bottom, stretch, space and distribute.
        -Horizontally: Left, center, right, stretch, space and distribute.
        -Direction: Row or column.
        -Example: view({content: 'top-left column'}})('content')
    -Expand: TO-DO. Specifies how much the element grows compared to the siblings.
    -Url: The url property contains all the elements to perform the routing of the app.
        -Active: Determines when the active attribute is set.
        -Visible: Determines when the visible attribute is set and therefore displayed on the screen.
        -Link: Determines the url where the app is routed to when the element is clicked.
        -Example: view({url: {visible: '/* /* /events', active: '/* /* /events'}})('content')
    -Animations: Animations can be set on attribute change events. The {animations} object provides some predefined options.
        -Attribute: The attribute state that triggers the animation. E.g.: visible: when the element visible attribute is added triggers animation. 'not-visible': when the visible attribute is removed triggers the animation.
        -Keyframes: Each of the CSS keyframes for the standard animate() function
        -Options: Each of the options, such as the timing and the easing, for the standard animate() function
        -Style: New styles being set after the animation.
        -Example: view({animations: {visible: 'fade-in', 'not-visible': 'fade-out'}})('content')
**/

// var emotionCSSClasses = [];

 /*POSITION CONTENT*/
const positionContent = (content) => {
    let direction = 'row';          //Direction of the content. Row: Content flows along the x-axis (horizontal). Column: Content flows along the y-axis (vertical).
    let wrap = 'wrap';              //Wraps the content adding new lines if it exceeds the space in the longitudinal direction
    // let alignment = ['top', 'left'];
    let alignment = 'top-left';     //Alignment of the content across the y and x axis.
    let longitudinal = 'flex-start';//Positioning in the content direction
    let transversal = 'flex-start'; //Positioning in the cross direction, perpendicular to the content
    let overflow = 'flex-start';    //Positioning of the different rows and columns of content that overflow how are they aligned to each other.
    if(content) {
         //Example content: {x: 'left', y: 'top', direction: 'column', wrap: true, reverse: true}
        if(typeof content === 'object') {
            wrap = content.wrap ? 'wrap' : 'nowrap';
            direction = content.direction + (content.reverse ? 'reverse' : '');
            alignment = [content.y ?? 'top', content.x ?? 'left'];
        }
        //Example: content: 'column reverse wrap top-left'
        else if(typeof content === 'string') {
            if(content.includes('column')) direction = 'column';
            if(content.includes('reverse')) direction = direction + '-reverse';
            if(content.includes('nowrap')) wrap = 'nowrap';
            else if(content.includes('nowrap')) wrap = 'wrap';
            if(content.includes('-')) alignment = content.split(' ').filter(item => {return item.includes('-')})[0];
            alignment = alignment.split('-');
        }
        longitudinal = direction === 'row' ? alignment[1] : alignment[0]; //in the content direction
        transversal = direction === 'row' ? alignment[0] : alignment[1];  

        //Options for longitudinal alignment in CSS (justify-content): flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right
        //Options for longitudinal alignment in oneJS: left, center, right (for rows). top, center, bottom (for cols). space, distribute (for both)
        if(longitudinal === 'center') longitudinal = longitudinal;
        else if(longitudinal === 'bottom' || longitudinal === 'right') longitudinal = 'flex-end';
        else if(longitudinal === 'distribute') longitudinal = 'space-around';
        else if(longitudinal === 'space') longitudinal = 'space-between';
        else longitudinal = 'flex-start';       

        //Options for transversal alignemnt in CSS (align-items): stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end
        //Options for transversal alignment in oneJS: left, center, right (for cols). top, center, bottom (for rows). stretch?
        //Options for transversal alignment of the contet overflow in CSS (align-content): flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline
        //These options are also used to align the content overflow:
        if(transversal === 'center') {transversal = transversal; overflow = 'center';}
        else if(transversal === 'bottom' || transversal === 'right') {transversal = 'flex-end'; overflow = 'flex-end';}
        else if(transversal === 'distribute') {transversal = 'center'; overflow = 'space-around';}
        else if(transversal === 'space') {transversal = 'center'; overflow = 'space-between';}
        else if(transversal === 'stretch') {transversal = 'stretch'; overflow = 'stretch';} //Stretch: If the transversal dimension is not known, stretches the element. To be able to stretch the element 'align-content' also needs to be set to stretch.
        else {transversal = 'flex-start'; overflow = 'flex-start';}           
    }
    return {flexDirection: direction, justifyContent: longitudinal, alignItems: transversal, alignContent: overflow, flexWrap: wrap}; 
}

/*ANIMATE CONTENT*/
    //Triggers animation on attribute change: {'visible': {keyframes: [], options: {}, style: {new styles after animation}}, 'visible-off': 'fade-out'} //Visible is default and does not need to be specified
//Setup animation on property changes
const animate = (animation, property) => (newValue, component) => { 
    //This is the approach for complex animations where to each value we assign an animation object.
    let selectedAnimation = {}; //Default for visible 

    //Check the animation is formatted correctly. Example: animation: {visible: ['fade-in', 'fade-out']}
    if(Array.isArray(animation)) {
        try{selectedAnimation = newValue ? animation[0] : animation[1];}
        catch(error) {console.error("animate: animation should be in this format: ['in-animation', 'out-animation']"); return;}
    }
    //Example: const map = new Map(); map.set(true, 'fade-in'); map.set(false, 'fade-out'); animation: {visible: map}
    else if(animation && typeof animation === 'object') {
        try{selectedAnimation = animation instanceof Map ? animation[newValue] : undefined;}
        catch(error) {console.error('animate: No animation set for ' + newValue); return;}
    }
    else {console.error('animate: animation should be an Array or Map: ' + animation); return;}

    //Animations should go inside the ONEJS object
    if(typeof selectedAnimation === 'string') {//If it is a string, take it from the predesigned animations
        selectedAnimation = animations[selectedAnimation];
        if(!selectedAnimation) {console.warn('animate: No such animation: ' + selectedAnimation); return;}
    } 

    component.style.display = 'flex';//To always make sure the animation is displayed       
    try {
        component.animationController = component.animate(selectedAnimation.keyframes, selectedAnimation.options);
        component.animationController.onfinish = () => {
            if(selectedAnimation.style) Object.keys(selectedAnimation.style).forEach((key, value) => {
                component.style[key] = selectedAnimation.style[key];
            });
        };
    }
    catch(error) {console.error(error);} 
}

/*WEB ROUTING*/
//The reason why we call onVisibleChange and onActiveChange rather than directly setting the visible and active attributes of the component is to follow the 
//functional pattern where it is the state that should be updated on this events changing the visbile and active attributes it is binded to
//Example:  View({visible: read('isVisible'), onVisibleChange: update('isVisible'), url: {visible: '/home1', link: 'home2'}})('hello world')

const urlSetup = (url, onVisibleChange, onActiveChange) => component => { //Setup animation on property changes
    //When the page url matches this url sets the attribute 'visible'
    if(url && typeof url === 'object' && url['visible']) {     
        if(!matchUrl(url['visible'])) onVisibleChange(false);
        window.addEventListener('urlChange',  (e) => { 
            if(matchUrl(url['visible'])) {onVisibleChange(true);}
            else {onVisibleChange(false);}
        }, false);
    }

    //If url is of type link. Redirects to the linked address
    //If a link does not start with '/', it gets appended to the last part of the url (relative). 
    //If starts with '/', it replaces from the root (absolute).
    if(url && typeof url === 'object' && url['link']) {
        if(!url['active']) url['active'] = url['link'];//In order to set the active attribute to be able to style links
        component.addEventListener('click', async (e) => {
            e.preventDefault(); 
            if(matchUrl(url['active'])) return; //If the current url matches the active url do nothing (avoid changing url)
            window.history.pushState(null, null, url['link']); //data, title, url
            window.dispatchEvent(new CustomEvent('urlChange', { detail: url['link']}));
        });
        if(!window.onpopstate) { //Popstate gets activated when pressing next or back buttons on the browser or calling history.back() history.go()
            window.onpopstate = (e) => {
                window.dispatchEvent(new CustomEvent('urlChange', { detail: decodeURI(location.pathname + location.search)}));
            };
        }
    }

    //When the page url matches this url sets the attribute 'active'
    if(url && typeof url === 'object' && url['active']) {     
        if(!matchUrl(url['active'])) onActiveChange(false);
        window.addEventListener('urlChange',  (e) => { 
            if(matchUrl(url['active'])) onActiveChange(true);
            else onActiveChange(false);
        }, false);
    }      
}

export const View = ({visible=true, onVisibleChange=()=>{},  active=false, onActiveChange=()=>{}, content="top-left", expand, shrink, wrap=true, animation, url, ...attributes}={}) => structure => {
    //Set onPropertyChange callback functions
    let internalOnPropertyChange = {};
    if(animation && typeof animation === 'object') {
        Object.entries(animation).forEach(([property, value]) => { 
            if(value) internalOnPropertyChange[property] = animate(value, property);
        })
    }
    let exeternalOnPropertyChange = attributes['onPropertyChange'];
    let finalOnPropertyChange = exeternalOnPropertyChange ? {...internalOnPropertyChange, ...exeternalOnPropertyChange} : internalOnPropertyChange;//Compose internal and external onPropertyChange
    delete attributes['onPropertyChange'];

    //Set onCreate callback function
    let internalOnCreate = urlSetup(url, onVisibleChange, onActiveChange);
    let externalOnCreate = attributes['onCreate'];
    let finalOnCreate = externalOnCreate ? (component) => {internalOnCreate(component);externalOnCreate(component);} : internalOnCreate;//Compose internal and external onCreate
    delete attributes['onCreate'];

    //Set style
    let internalStyle = {
        display: visible ? 'flex' : 'none', 
        flexGrow: expand ?? 0,              //Ability for a flex item to grow if there is too much space (0 CSS default).
        flexShrink: shrink ?? 1,                      //Ability for a flex item to shrink if there is not enough space (1 CSS default).  
        ...positionContent(content)
    };
    if(animation?.['visible']) internalStyle.display = 'none';//Avoids initial rendering and then happening the fade-out animation (blink). Fade-in is still displayed 
    let externalStyle = attributes['inlineStyle'];
    let finalStyle = internalStyle;
    if(externalStyle) {
        finalStyle = {...internalStyle, ...externalStyle};
        delete attributes['inlineStyle'];
    }

    //React does not handle Boolean values for custom attributes, therefore visible and active need to be transformed to numbers
    visible = visible ? 1 : undefined;
    active = active ? 1 : undefined;

    return Div({visible: visible, active: active, inlineStyle: finalStyle, onCreate: finalOnCreate, onPropertyChange: finalOnPropertyChange, ...attributes})(structure);
};

 

/*TODO: Rewrite all my components to not use Component function as wrapper
Update: Even if it is nice that we managed to make it work without component wrapper I suspect it is still necessary as per the example below, probably everything needs to be wrapped in a createElement function
var e = React.createElement;

function TodoItem() {
  return e("li", null, "Todo Item");
}

function TodoApp() {
  return e("div", null, [
    e("h1", { key: "title" }, "To Do List"),
    e("ul", { key: "todos" }, [
      e(TodoItem, { key: "item1" }), //The todo items are wrapped with createElement during usage
      e(TodoItem, { key: "item2" })
    ])
  ]);
}

ReactDOM.render(e(TodoApp), document.getElementById("root"));

*/
//It is meant to be used with one icons.
//If we want to have the primary color on the icon we need to set the active property to true
//The best way to set the icon color is by changing the theme, in the documentation we should let know which are the variables being used.


//maybe consider using cdn icon fonts
//https://stackoverflow.com/questions/48719337/how-to-give-gradient-color-to-icon/48719471
//https://fonts.google.com/icons?selected=Material+Icons
//https://fontawesome.com/icons
export const Icon = Component('Icon', false, ({icon = 'iosClose', iconFont = oneIcons, folder='node_modules/@onejs-dev/onecomponent/icons/', raised, size=32, flavor=readFlavor('default'), ...attributes}={}) => {
    let selectedIcon = iconFont[icon];
    size = size === 'large'? 64 : size === 'small'? 16 : size;
    let padding = Math.floor(parseInt(size) / 4);

    if(flavor.primaryGradient) {
        selectedIcon = selectedIcon + readGradient(flavor.primaryGradient);
    }
    let mainStyle = {
        width: size, 
        height: size,
        fill: flavor.primaryGradient ? 'url(#oneJS)' : flavor.primaryColor ?? 'blue', //our change to implement cool gradients for icons
        background: 'none',
        transitionDuration: 0.4,
    }
    if(raised) {
        mainStyle = {...mainStyle, ...{
            background: flavor.backgroundColor ?? 'blue',
            border: flavor.border ?? 'none',
            borderRadius: flavor.radius ?? '0px',
            boxShadow: flavor.shadow ?? 'none',
            padding: padding,
        }};
    }

    if(attributes['style']) {mainStyle = {...mainStyle, ...attributes['style']}; delete attributes['style'];}
    //on native we can implement the same with expo svg package
    // icon = 'ios-add';
    // return Svg({style: mainStyle, flavor: flavor, dangerouslySetInnerHTML:{__html: readGradient(flavor.primaryGradient) + '<use width="' + size + '" height="' + size + '" href="' + folder + '/' + icon + '.svg#' + icon + '"/>'}, ...attributes})();
    return View({style: mainStyle, flavor: flavor, dangerouslySetInnerHTML:{__html: selectedIcon}, ...attributes})();
});

//Closures work in the scope the function is defined, not called...

//Think how to highlight what variables are required as state. In this case backdrop. Without it being a state variable, this is not viable.
//closeModal shoud be update('backdrop'), takes the event and sets backdrop, but you could also do much more taking the event and updating as many variables as needed.
export const Modal = Component('Modal', true, ({flavor=readFlavor('default'), header, footer, backdrop=true, closeIcon=true, size='medium', onClose=()=>{}, ...attributes}={}) => (structure) => {
    let contentStyle = { 
        borderRadius: flavor.radius ?? '0px',  
        backgroundColor: 'rgba(255, 255, 255, .85)',
        backdropFilter: 'blur(10px)',        
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
        zIndex: 1000,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95vw',
        height: '95vh',
        maxWidth: size === 'large'? 1000 : size === 'small'? 300 : 500,
        maxHeight: size === 'large'? 600 : size === 'small'? 200 : 300,
        '#close': {background: 'none', position: 'absolute', top: 5, left: 5, fill: '#999', cursor: 'pointer'},
        '#close:hover': {opacity: '0.5'}, '#close:active': {opacity: '0.8'},
        '#header': {padding: '10px 0', width: '100%', borderBottom: '1px solid white', fontFamily: flavor.sectionFont ?? 'Arial', fontSize: flavor.sectionSize ?? '110%', color: flavor.sectionColor ?? '#333' },
        '#footer': {padding: '10px 0', width: '100%', borderTop: '1px solid white'},
    }
    let backdropStyle = {id: 'backdrop', zIndex: 500, position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw', background: 'rgba(0,0,0,0.5)'};
    return View({visible: false, flavor: flavor, style: {width: size, height: size}, ...attributes})([
        backdrop && View({id: 'backdrop', style: backdropStyle, content: 'center-center', visible: backdrop, onClick: (e) => {e.target.value = false; onClose(e);}})(),
        View({id: 'content', content: 'space-center nowrap column', style: contentStyle})([
            Icon({id: 'close', name: 'iosCloseCircleOutline', onClick: (e) => {e.target.value = false;onClose(e);}}),
            header && View({id: 'header', content: 'center-center'})(header),
            structure, 
            footer && View({id: 'footer', content: 'center-distribute'})(footer),
        ]),
    ]);
});



 


//Multiple views one on top of the other. This container gives flexibility to transition between one another with nice animations
//TIP: The slider can be customized or combined with the tabs element, if we add the href = id + 'Slide' + index. Then we can use the state variable assigned to value to style which tab is active.
    //Other elements can use the href property to move the slider or the location.hash = newHash method. Setting the state property does not move to the element. Rather move the element to set the state property.
    //Works better setting height and width
export const Slider = Component('Slider', true, ({value = 0, onChange = ()=>{}, bullets = true, direction = 'row', scroll = true, flavor=readFlavor('default'), ...attributes}={}) => structure => {
    
    //Change behavior if row or column
    let mainStyle = {
        position: 'relative',//Required for the bullets to have their absolute positioning relative to this element 
        height: '200px',//Required for the container and the content to completely full the slide space
        a: {backgroundColor: 'rgba(255, 255, 255, .85)',  textDecoration: 'none', backdropFilter: 'blur(10px)', borderRadius: '100%', margin: 5, height: 25, width: 25,
        color: flavor.textColor ?? "#333", border: 'solid 1px ' + flavor.primaryColor ?? blue, display: 'flex', justifyContent: 'center', alignItems: 'center' },
        'a[active]' : {backgroundColor: flavor.primaryColor ?? 'blue', color: flavor.backgroundColor ?? 'white'},//Styles the active bullet
        '.sliderContainer': {flexWrap: 'nowrap'}
    }
    let containerStyle = {
        width: '100%',
        height: '100%',
        scrollSnapType: direction === 'column' ? 'y mandatory' : 'x mandatory',//Allows the content to snap on the different slides
        scrollBehavior: 'smooth',
        overflowX: direction === 'column' ? 'hidden' :  (scroll ? 'scroll' : 'hidden'), 
        overflowY: direction === 'column' ? (scroll ? 'scroll' : 'hidden') : 'hidden',
        // WebkitOverflowScrolling: 'touch', //this is required to work on ios
    }    
    let contentStyle = {
        scrollSnapAlign: 'start',
        width: '100%',
        height: '100%'
    }
    let id = attributes['id'] || '';//Required id property in case there are multiple Slider-s, to have a unique hash location 
    let visibleEvent = (myValue) => (element) => {//Determines if an element is visible on the screen, and based on that updates the 'value' property
        if(!element) return;
        let options = { // root: by defaut is the screen, rootMargin: by default is 0          
          threshold: 0.55 //55% on screen
        }
        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
                    onChange(myValue);
                }
            });
        };
        let observer = new IntersectionObserver(callback, options); //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        observer.observe(element);  
    }
    mainStyle = [mainStyle, attributes['style']];
    delete attributes['style'];
    //Update the url with the right element. This enables other elements to modify the value property. Does not work, resets the hash on scroll
    // if(!scroll && location.hash !== '#' + id + 'Slide' + value) location.hash = '#' + id + 'Slide' + value;
    
    return View({name: name, flavor: flavor, expand: 1, style: mainStyle, ...attributes})([
        View({style: containerStyle, content: {direction: direction, wrap: false}, class: 'sliderContainer'})(
            structure.map((view, index) => View({onCreate: visibleEvent(index), content: {direction: direction, wrap: false}, shrink: 0, key: id + 'Slide' + index, id: id + 'Slide' + index, style: contentStyle})(view))), 
        bullets && View({content: 'center-center', shrink: 0, id: 'bullets', inlineStyle: {position: 'absolute', bottom: 0, width: '100%', zIndex: 3}})(
            structure.map((view, index) => A({key: index, active: parseInt(index) === parseInt(value) ? 1 : undefined, href: '#' + id + 'Slide' + index})(index)))
    ]);
});