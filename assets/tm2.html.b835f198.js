import{b as n}from"./app.0d0ab3c5.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<div class="custom-container info"><p class="custom-container-title">\u514D\u8D39\u7FFB\u8BD1API DEMO</p><p>\u5C06\u526A\u5207\u677F\u5185\u5BB9\u7FFB\u8BD1\u540E\u518D\u653E\u5165\u526A\u5207\u677F</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ==UserScript==</span>
<span class="token comment">// @name         \u514D\u8D39\u7FFB\u8BD1API</span>
<span class="token comment">// @namespace    https://bbs.tampermonkey.net.cn/</span>
<span class="token comment">// @version      0.1.0</span>
<span class="token comment">// @description  try to take over the world!</span>
<span class="token comment">// @author       \u5F20\u4EE8</span>
<span class="token comment">// @match        *://*/*</span>
<span class="token comment">// @grant        unsafeWindow</span>
<span class="token comment">// @grant        GM_xmlhttpRequest</span>
<span class="token comment">// ==/UserScript==</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;copy&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u76D1\u542C\u590D\u5236</span>
    navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">readText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u53D6\u526A\u5207\u677F\u5185\u5BB9</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">GM_xmlhttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.66mz8.com/api/translation.php?info=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                <span class="token function-variable function">onload</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">xhr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">switch</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">case</span> <span class="token number">200</span><span class="token operator">:</span>
                                navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">.</span>fanyi<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u7FFB\u8BD1\u540E\u5185\u5BB9\u653E\u5165\u526A\u5207\u677F</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token keyword">case</span> <span class="token number">201</span><span class="token operator">:</span>
                                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u7FFB\u8BD1\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token keyword">case</span> <span class="token number">202</span><span class="token operator">:</span>
                                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u7FFB\u8BD1\u53C2\u6570\u67E5\u8BE2\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token keyword">default</span><span class="token operator">:</span>
                                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u77E5\u9519\u8BEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u5668\u65E0\u54CD\u5E94\u6216\u8BF7\u6C42\u51FA\u9519&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,2);function t(e,o){return p}var u=s(a,[["render",t],["__file","tm2.html.vue"]]);export{u as default};
