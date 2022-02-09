// import {BaseComponent} from './oneCore.js';

import {getLanguage, setLanguage, updateLanguage, readText,
        read, add, update, remove, 
        goToState, nextState, previousState, readStateHistory,
        BaseComponent, Component,
        themeVariable, updateThemeVariable} from '@onejs-dev/onecore';

export {getLanguage, setLanguage, updateLanguage, readText,
        read, add, update, remove, 
        goToState, nextState, previousState, readStateHistory,
        BaseComponent, Component,
        themeVariable, updateThemeVariable};


/*STANDARD COMPONENTS:
Html standard components to be used on the web.
Naming convention: Exact same name as the html tag with CamelCase with first letter in capital.
    -Remarks: 
    <object> is Obj not to colide with Object reserved word.
    <iframe> is IFrame
    <tbody> is TBody 
    <map> is OneMap to avoid collision with Map
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
export const Input = BaseComponent('Input', false, 'input'); //"Input" is defined later in a custom way
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