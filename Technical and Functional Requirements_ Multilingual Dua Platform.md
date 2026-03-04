# **Requirements Specification: Multilingual Islamic Supplication Platform**

This document outlines the essential requirements for a high-performance, mobile-first web platform dedicated to Islamic supplications (*duas*). The system is designed to provide seamless access to content in Arabic, Bangla, and English, with a specific focus on search engine visibility and offline-first accessibility.

## **1\. Project Scope and Strategic Focus**

The platform's primary goal is to serve as a definitive digital compendium of *duas*, utilizing the provided English and Bangla datasets. The architecture will be **client-side focused**, ensuring high performance on mobile devices and robust SEO for global discoverability.

### **Core Constraints:**

* **Mobile-First Design:** All UI/UX decisions prioritize the smartphone experience, ensuring thumb-friendly navigation and responsive layouts.  
* **Search Engine Optimization (SEO):** Targeted strategies for both English and Bangla search intent to drive organic traffic.  
* **Linguistic Parity:** Every entry must maintain a 1:1 mapping between Bangla and English versions to allow for instant language switching without loss of context.1

## ---

**2\. Functional Requirements**

### **2.1 Content Display and Navigation**

* **Bilingual Detail View:** Every supplication must display the original Arabic text (with diacritics), phonetic transliteration, and full meanings in both Bangla and English.3  
* **Category-Based Browsing:** Content must be organized into logical hierarchies:  
  * **Routine:** Morning/Evening, before sleep, upon waking.3  
  * **Emotional State:** Duas for anxiety, patience, gratitude, and grief.4  
  * **Occasions:** Travel, illness, prayer rituals.3  
* **Language Toggle:** A persistent, easily accessible switcher that changes the UI and content language (Bangla ↔ English) instantly.7

### **2.2 Advanced Search Functionality**

* **Multilingual Keyword Search:** Users must be able to search for *duas* using English, Bangla, or Arabic terms.  
* **Transliterated Search:** Support for "Banglish" queries (e.g., searching "Bangla khobor" to find news) to accommodate common user behavior.  
* **Query Semantics:** The search engine should prioritize intent, matching synonyms like "patience" with "sabr" or "ধৈর্য".

### **2.3 Audio and Multimedia**

* **Integrated Audio Player:** A lightweight, client-side player for each *dua* with "Repeat" and "Loop" functionality to assist in memorization.5  
* **Adaptive Streaming:** Audio should be delivered in small chunks to ensure smooth playback on limited mobile bandwidth.10

### **2.4 Social Sharing and Engagement**

* **Dynamic Image Generation:** A tool to convert *dua* text (Arabic \+ Translation) into a formatted image for sharing on WhatsApp or Instagram.5  
* **Favorite/Bookmark System:** A local-storage-based feature allowing users to save specific *duas* for quick access without requiring an account.

## ---

**3\. Non-Functional Requirements**

### **3.1 Mobile-First UI/UX Performance**

* **Touch Accessibility:** All interactive elements (buttons, toggles) must have a minimum target size of ![][image1] pixels (standard recommended ![][image2] pixels for thumb-friendliness).  
* **Responsive Typography:**  
  * **Arabic:** Minimum ![][image3] to ![][image4] for legibility of diacritical marks.13  
  * **Bangla:** Use Unicode-compliant fonts like *SolaimanLipi* or *Nikosh* to prevent "broken" conjunct characters.14  
  * **Line Spacing:** A line height of at least ![][image5] is required to prevent overlapping of vowel signs in Bangla and Arabic scripts.  
* **Visual Rhythm:** Maintain a clean, minimalist design to reduce cognitive load, allowing users to focus on reflection and prayer.16

### **3.2 SEO and Discoverability**

* **Structured Data (Schema.org):** Implement JSON-LD schema for "SpecialAnnouncement" or "Article" to help search engines understand the nature of the supplications.  
* **Hreflang Implementation:** Use hreflang tags (e.g., bn-BD, en-US) to tell Google which language version to serve based on the user's location and settings.7  
* **Human-Readable URLs:** Generate clean URL structures (e.g., /duas/protection or /duas/সুরক্ষা) instead of cryptic IDs.  
* **Meta Optimization:** Each page must have unique titles and descriptions in the corresponding language, limited to 60 and 160 characters respectively.

### **3.3 Offline Accessibility (PWA)**

* **Progressive Web App (PWA) Capabilities:** The site must be installable on mobile home screens and function offline once initial content is cached.  
* **Client-Side Caching:** Use the Cache API to store the "app shell" (CSS, JS, Logos) and IndexedDB to store the *dua* text locally.  
* **Storage Quotas:** Ensure the total local data footprint remains within browser limits (typically ![][image6]–![][image7]) to avoid eviction.

## ---

**4\. Technical Implementation Strategies**

### **4.1 Client-Side Data Architecture**

* **Bilingual Mapping:** Utilize a "Translation Table" approach where universal Dua IDs link both the Bangla and English strings. This ensures that when a user toggles languages, they remain on the same supplication.19  
* **UTF-8 Compliance:** Mandatory use of UTF-8 encoding to support the complex ligatures of Arabic and Bangla scripts without data corruption.21

### **4.2 Typography and Layout**

* **Bi-Directional Support:** Use the HTML dir attribute (ltr for English/Bangla, rtl for Arabic blocks) and the \<bdi\> element to prevent punctuation errors in mixed-language sentences.22  
* **Adaptive Layouts:** Design for "text expansion"—Bangla and Arabic often require more horizontal and vertical space than English.24

### **4.3 Theological Integrity and Trust**

* **Citation Visibility:** Every *dua* must clearly display its source (e.g., *Sahih al-Bukhari 6306*) to build scholarly trust.3  
* **Data Privacy:** As a client-side app, avoid unnecessary data collection. Use local storage for user preferences to maintain maximum confidentiality.16

#### **Works cited**

1. The Biggest Mistakes in Bilingual UI/UX Design \- Freezil, accessed on March 4, 2026, [https://freezil.com/the-biggest-mistakes-in-bilingual-ui-ux-design/](https://freezil.com/the-biggest-mistakes-in-bilingual-ui-ux-design/)  
2. Designing for a Bilingual Audience: How Miami Websites Are Integrating Seamless Language Switchers \- Ajroni, accessed on March 4, 2026, [https://ajroni.com/designing-for-bilingual-audience-how-miami-websites-integrate-seamless-language-switchers/](https://ajroni.com/designing-for-bilingual-audience-how-miami-websites-integrate-seamless-language-switchers/)  
3. Hisn al-Muslim \- Sunnah.com \- Sayings and Teachings of Prophet ..., accessed on March 4, 2026, [https://sunnah.com/hisn](https://sunnah.com/hisn)  
4. Dhikr & Dua \- Ratings & Reviews \- App Store \- Apple, accessed on March 4, 2026, [https://apps.apple.com/us/app/dhikr-dua/id1561598617?see-all=reviews\&platform=iphone](https://apps.apple.com/us/app/dhikr-dua/id1561598617?see-all=reviews&platform=iphone)  
5. Dhikr & Dua \- App Store \- Apple, accessed on March 4, 2026, [https://apps.apple.com/us/app/dhikr-dua/id1561598617](https://apps.apple.com/us/app/dhikr-dua/id1561598617)  
6. My Dua List: Homepage, accessed on March 4, 2026, [https://mydualist.com/](https://mydualist.com/)  
7. Best Practices for a Multilingual Website/Database \- Boston Research Center, accessed on March 4, 2026, [https://bostonresearchcenter.org/best-practices-for-a-multilingual-website-database/](https://bostonresearchcenter.org/best-practices-for-a-multilingual-website-database/)  
8. accessed on January 1, 1970, [https://uxdesign.cc/designing-for-multilingual-users-3-best-practices-for-language-selection-80946220e891](https://uxdesign.cc/designing-for-multilingual-users-3-best-practices-for-language-selection-80946220e891)  
9. The best React video player libraries of 2026 \- Blog \- Croct, accessed on March 4, 2026, [https://blog.croct.com/post/best-react-video-libraries](https://blog.croct.com/post/best-react-video-libraries)  
10. Improving Usability Through Better Font and Image Practices in Arabic Websites, accessed on March 4, 2026, [https://hackernoon.com/improving-usability-through-better-font-and-image-practices-in-arabic-websites](https://hackernoon.com/improving-usability-through-better-font-and-image-practices-in-arabic-websites)  
11. What's the Difference Between Streams and Downloads? \- The Simplecast Blog, accessed on March 4, 2026, [https://blog.simplecast.com/whats-the-difference-between-streams-and-downloads](https://blog.simplecast.com/whats-the-difference-between-streams-and-downloads)  
12. Best HTML to Canvas Solutions in 2025 \- portalZINE.DE, accessed on March 4, 2026, [https://portalzine.de/best-html-to-canvas-solutions-in-2025/](https://portalzine.de/best-html-to-canvas-solutions-in-2025/)  
13. Fonts and readability: Best Arabic Script for the web \- Code Guru, accessed on March 4, 2026, [https://codeguru.ae/blog/fonts-and-readability-best-arabic-script-for-the-web/](https://codeguru.ae/blog/fonts-and-readability-best-arabic-script-for-the-web/)  
14. Typography Bangla Font \- Decornculture, accessed on March 4, 2026, [https://www.decornculture.com/typography-bangla-font](https://www.decornculture.com/typography-bangla-font)  
15. Bangla Web Fonts – WordPress plugin, accessed on March 4, 2026, [https://en-gb.wordpress.org/plugins/bangla-web-fonts/](https://en-gb.wordpress.org/plugins/bangla-web-fonts/)  
16. Designing Meaningful Digital Faith Experiences: UX Principles in Scripture-Based Apps, accessed on March 4, 2026, [https://www.researchgate.net/publication/401344560\_Designing\_Meaningful\_Digital\_Faith\_Experiences\_UX\_Principles\_in\_Scripture-Based\_Apps](https://www.researchgate.net/publication/401344560_Designing_Meaningful_Digital_Faith_Experiences_UX_Principles_in_Scripture-Based_Apps)  
17. Crafting Digital Spaces With Faith: The Art of Islamic Website Design \- Oreate AI Blog, accessed on March 4, 2026, [http://oreateai.com/blog/crafting-digital-spaces-with-faith-the-art-of-islamic-website-design/32d521f5baf7a59cbdeef5398b556cce](http://oreateai.com/blog/crafting-digital-spaces-with-faith-the-art-of-islamic-website-design/32d521f5baf7a59cbdeef5398b556cce)  
18. 5 Secrets To Effective SEO In The Middle East \- The Arabian Mirror, accessed on March 4, 2026, [https://thearabianmirror.com/5-secrets-to-effective-seo-in-the-middle-east/](https://thearabianmirror.com/5-secrets-to-effective-seo-in-the-middle-east/)  
19. How to Design a Multilingual Database Structure | A Practical Guide \- DEV Community, accessed on March 4, 2026, [https://dev.to/adnanbabakan/how-to-design-a-multilingual-database-structure-a-practical-guide-35nf](https://dev.to/adnanbabakan/how-to-design-a-multilingual-database-structure-a-practical-guide-35nf)  
20. How to Target the Muslim Audience During Ramadan with SEO \- Riwaya Blog, accessed on March 4, 2026, [https://riwaya.co.uk/riwaya-blog/target-the-muslim-audience-during-ramadan-with-seo](https://riwaya.co.uk/riwaya-blog/target-the-muslim-audience-during-ramadan-with-seo)  
21. Multilingual Database Design: Architecture & Optimization Guide \- Translated, accessed on March 4, 2026, [https://translated.com/resources/multilingual-database-design-architecture-optimization-guide](https://translated.com/resources/multilingual-database-design-architecture-optimization-guide)  
22. Implementing Right-to-Left Language Support: Essential Steps for Global UI Design, accessed on March 4, 2026, [https://pageoneformula.com/implementing-right-to-left-language-support/](https://pageoneformula.com/implementing-right-to-left-language-support/)  
23. Proper web typography question, specifically line-height and margin \- Reddit, accessed on March 4, 2026, [https://www.reddit.com/r/typography/comments/2uga39/proper\_web\_typography\_question\_specifically/](https://www.reddit.com/r/typography/comments/2uga39/proper_web_typography_question_specifically/)  
24. Language Switching in UI Design: Lessons from My UI/UX Project Krishi Marg \- Medium, accessed on March 4, 2026, [https://medium.com/@hasti.jethwa/language-switching-in-ui-design-lessons-from-my-ui-ux-project-krishi-marg-cf99dd7a1646](https://medium.com/@hasti.jethwa/language-switching-in-ui-design-lessons-from-my-ui-ux-project-krishi-marg-cf99dd7a1646)  
25. Islamic School Website design by Aryafianto on Dribbble, accessed on March 4, 2026, [https://dribbble.com/shots/26296535-Islamic-School-Website-design](https://dribbble.com/shots/26296535-Islamic-School-Website-design)  
26. Bidirectional Infinite Scroll List component for Large List and support React, Vue 3, RN, accessed on March 4, 2026, [https://javascript.plainenglish.io/bidirectional-infinite-scroll-component-for-react-vue-3-rn-9b96a3787a1c](https://javascript.plainenglish.io/bidirectional-infinite-scroll-component-for-react-vue-3-rn-9b96a3787a1c)  
27. Islamic App Development: The Complete Guide \- Nagorik Technologies, accessed on March 4, 2026, [https://nagorik.tech/blog/islamic-app/islamic-app-development-guide/](https://nagorik.tech/blog/islamic-app/islamic-app-development-guide/)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAXCAYAAABTYvy6AAACl0lEQVR4Xu2WzatOURSHl3xEiAx8RJTMfCfURSYMDJgYGJgY+gtIBkgyIEmJkNtVJkgGjCi3200pGRhJSRQDBiYoAx/rsfaq9a7Oe51z5Jacp369e6+z33P2b++1P0Q6Ojr+FyaqFqm2qhakZ1VMUO1V7cgPxokZqg3ltw54O5yD8Fz1TvVe9UO1R8xcPzaqPqsO5gd/mWmqU6qPqjdifb2tmh8bJSarBlWv84O1qoFQp/xNtTvEMiNiHx1P45NUF1RXxAYAKNOPB6pZJZZhEr9LMk6qDBfFtPki1nhbiDmkGKPexPjMHEhMz4EKdop9E1EGsvJ6id0rschF1SEx0z3G+eNZsZFkRB3SOH7AYVTviBmua5z3nhNLuSrWqB7nYAXLVR/E0pwsdYbE+jIcYs411RKpMA6Yz+uZ2cb8uhCjzQHVMWlmHDB9qfxGMP1ULIvqMLUo1plp+sI6jmB4mdhmXWk8g0FedEN6O8ooP1TNlebGAePRfFPTVawQy4Cvqi0hTpadL+XaxtmxX4iNmMP6v6vaXuptjPusu/k/NQ3MMv0gE2PW7lLdLOXfGmf9sjuyY2fui82008a4w8CyjHxnbgunzj7pNUz5jGp/iI1p3GeDUfJjgQ4uLOVPYuemizrGPc7H6sAMk02bxHbcvObrwntehfocsXdi8qXYncT7Spm+omeqleU/v2DLx7jPAmvkqmp9qfPCqONiL+KX+uzSbizctKf3aWlnng1rVHrvHptVl8VuoGRm7Otq1duieRK+R3rcUi0OjVepHqmWeqNEm1SPpoEONDXPvvNEbA1Hc0dUJ0K7SGWq+wXGUyGKYyIeHdCv/VBok5miOpmDAUwfzcEK4gUmq99lK7fLR3RHR0dHxz/PTzS2o7fWrzjpAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAXCAYAAABTYvy6AAACNklEQVR4Xu2VPWgVQRSFj/iDYkRBMAiCKeyCqAhaiKUEi9hYWCg2NvYGf7BRLCwUC0EQGzGVkCaF2BhwsREbC0vBwkAsLKyMhWDiOdy9MLnOzr7dIiLuB4e3e+fydr6Z2feAgYGB/5VLsRDYwJxnTseBdWYnc52ZCPXIPuZmLEYmmGexGDjOLDPX4sA6cwM2j6NxIGEz85T5HAdSvKlN/A2zir8vLuk28XPMCgri+5kFZgZl8WPMPXQT3xELge2x0IJetauwDSiJP4adCklnxbXTarrATKNZXO/UPEx4VPFNzEPYM3IcZt7FYgta/JdMhbL4LGxDG8XPwpo0uSZxX+Xb6CYu9L1P6s8USb+HiYyKL/5JlMUlfIDZi4L4a2ayvm4SPwLr24Pu4kLiqXwfaXGFeQDbiAp5cZ2yR/V1o7iaLif3OfEx5gVzqr7vI+677vJ9pNPFFxXy4meYufo6K64veJUWkBdXjz9M9BF3/K9wWxxoQZvjO+1UWCuuMfWkG5kVl+RPZjHJt6T2HPaL+z306F7iXtfDRkE7/JE5Afsxje98Ce30V6ydxy/YPLwuyU/Ml6RH1+pRPjAHGWytm9NchB0TXe+GrWLsuQP7In3qfhfacWk/3vfRTV5zifN4y/xgpur7jbCTmfYcYpbqjKPwvNxRj/Q56qm00AS6ykcq5N/xFMn/cdRTJOtHwlPBftgcXasW+0oLtYW5G4sJkr4Viy1IVMJxHpE43rZIAwMDAwP/HL8B+fqgF5ZsiuEAAAAASUVORK5CYII=>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAXCAYAAAB50g0VAAACEklEQVR4Xu2Vv0tcQRDHR0RQEDQG1EDCXZGIWojgD1KnSJcUqQQDgoJ/ghKwEyFBEIWAYGclKAiSKlEkoGiRQjtBEogiCkIQBIUI/vh+M7u8efvOdzHk8Ir7wod3OzNvd253Zp9ISSUVp56EhkC14BmoDB2FVgMYBxehw6kOzINdsATOwQdQZYMKoXpwKbogn9dx9x9Vg8/gHSh3tqeiyU77oEKLSXyV3AkOg2PRo7V6BU4DW8GUlmCvqH0HtDlbGRgVfceKO1zhfvPJ0vkvSkvwsWhy9JEHYAAcgE4XM2v8fWAdHIFDsAmaXBzX2Q94BL6Z8YKLiyktQapd9GWfxBbIGD+7+znYc75W4ztxdIvuPP/wlOg8q6K7PujGc+Chi4spX4KcpB/8lijJFdBoYvwcXcZGsRQY/0mirq8RfZ+NyVKYASMSNWFCaQlOgh8g68ZcZEj0SrLxfo4OY6N4hNxZxrKxrF6DX6A5sCeUliBrbSw0Qi9Ed9Rf2v+SYNbZuYO+uXIqLcEz8CY0SvROvgQ55hzE+njMy+CL6LpvjS+htAR/go+SLFx2M7vP6y416OuOZEQvfd9IMXFSX/Qh/jg4GQv4CqyBCfAdbEhUl5RPkAlti149HC+Kdq6PsWvQ73fY28Kd/mvxSF6CHtAiyY6zR0wfP6Osv6LRbTVYNCrqBPnp4yeKdyPr9L3o16Wke9MNXtOMkNC1WE8AAAAASUVORK5CYII=>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAXCAYAAAB50g0VAAACMUlEQVR4Xu2WT6iNQRjGH6GIIvKv6FogWZFI3KyUFRt2FKWsrChSdjY2FixRsrIgJd0S0i2KWHAXdyMbElGysiF/np935p755jice+t0z+I89es7M/N+M+/3zvvOHGmggfpHM8xis90MVWO1Fpq1ZnY90Es9NZ/MO/PDXDTzGhbScnPLfDS3zWdzzMwsjXohIrZbEUW00vwyD8yC1MeT9nOzJPXtM9/NidTuiYgSC78xK4r+Rwonb5pZZkThzHBhg4g0dj0TUTtv7pn5Rf+oWlHkI/iAr2ZzYYNOqd1BtjznJ89lxdiUhJN1Ho0rFiZCCOf+5eAccy39hkPmsflg3psnZl16h0C8rWD3SJ/cvpHsOuqn+WI2pfb/HGQyqnubItovzIbCjrlgqyIg5PkFxbsPFQE6mtrXFSdKrok2MUglUwRZ3TiIeI6aLdkg6azC7o6Zm/py4bEWqXDJnFH7bk6IgdOK46bWZB2s7dhCIovtnmpsr+LIWl/1N0Q4T5oxsyb1LTI7FFXcbZFMxcHVqZ8Idjz8DysqmcM4i4lIfMRWkJe7WsN/dEXdOUj7b7vANt9XrM08B4uxhu4qQsyXZi4rIoS4MZjgQGojKpfzkeTPmkwO5ryDIfNKrUKaUJ6Ql2vqr91oXptn5rhisqtqXol5Phx6qdgB2lyRVG62KddhPEe409pdi6/eafabVdUYKreYoluq5g017eqUg32jvnbwiOKK+qb4s3FOcbsMNG36DU2RlSVlL+M6AAAAAElFTkSuQmCC>

[image5]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAABkUlEQVR4Xu2USytFURTHl+QVZWBEimSkkJSBDJXyKhkYmBgpjHwBE9/BQEmSZEZGHuWUiQ9ASimkDGSgkMjj/7fOvnfvc85N+947up1f/eq09mudvdfeIikphVMG22F5tCEB9m2SeN9a2BCJecGJO+AevIGNTmsydTCAL3AXrsJz+AHHs9386IRf8A3+wFvxS4ZjjM9wVPTnCqIXvopfMtwRjis6JZFMHxyBK7Bf3IJm+53lMOyGF1ZsKNPbIp9kDkULfgm2wEe4KXqjCG8V41uiNVUNa0QvCutrIYzFyCeZAzhpxWZEF10Wt4ib4SXsCb9PRXc0J77JJNEGH+A3HIy0MTkmug+rIm0xfJNZhE9w1opxHMdz0TErbuD8fEbs3UzEN5lAdFEWaWUYM3N8woEwZmDtTMEreA1bndYI/yVzAuckWwvb8Ah2ZXro0fCIzmC9Fa+AO+E3d4W7cyxunz+4sP2KGgPRIjW8w3XR20CY1Dy8hxtwTeIvsDkyI+Hx2TGOLRq8vhNwWnJc05SUkucXcTpoRu7y8vsAAAAASUVORK5CYII=>

[image6]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAXCAYAAACmnHcKAAACr0lEQVR4Xu2WS6hOURiGX5GSWzpyycAllBJKSEmSSC7lrgwMlCQTI5mYGChioFAkyYDBKUYyPEUSEwOiUIeUUiclDMjlfX3r+/e31974/z0x2W89/Xuv6/eutb61f6BVq1ZNNIwMz8pGk76sTFLbSWQ5qn3ukjeJW2RqubqiJeQBij5nyIHwLh6Ty+RiYC4sjlqNIZ9gAaixOn8lm2Mjaga5T57A2r0gi0L9erKbPCI/yKFQl2sEuUp+pt/tZBmZl56PwcY4kt6dfanPFdiCVyQzahDZiKp7megno9L7CfIKZjJKwV0iA7Cx6zSf3IDNtSmrkxaTz+k310NYvwuwRSlJE9Z1ilKbIdjKuXSMXpOnZGIolxkFqAnPhnLXeNjKzkYzM9ot9aut78bMLFjgMQ/UbwDVQd2Myp+RyaFOWkFOkXFoZkYLoX7KNy1MSQpqKdlAzsNWM09uDfonM3lAbuZOqlMeuXR0T8IuED/evZhR/++wyyHma0cadBCWdNPJTnIN5QRbg97NyITqrqM429olraxWtBszN1HcYrqYnpOjsF2tlQbdlpVpkuMoLgFN2KuZmeQt+QBLeEkGD6bnbsysg83pzIHtjBZkSqf1P/QOdjVqR6Qmx0xSf43j5/scil3qxkx+zKRpsJOkvqdjhVb+MNkfC2GBx4nqLoCxsA/lF9gH0BXNyICMfIMlfvx2NTUTF1G/lQp9MEeGcg3kAUgTyEeysNOiuJoHYavlimYkv0qVO/Fma2pGsejDrL79sUJbrkkWxEKUj4YrmpP0zRlCOcGl3IzyRXmjyaOamtkFi09szep+HzUlqoLQjfES9f8AVpP3sOCVyDpeO1C086PpaDyX2t9Ozx5obOvtfRf/xj2yEtX4OuojW8gesqpcVZKu67Vkb3pu1apVq/+vXwVByj3QbZVmAAAAAElFTkSuQmCC>

[image7]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAWCAYAAABzCZQcAAAC00lEQVR4Xu2WS6iNURTHl1BEUeQSEmWglHc3RSYUAwaSlLkkGShJykQmCBmiZCSPlIEyMDgxEcpIBhiQyEBKMSCP/++ub51vn323z+lMbvH969c53177sdZ+rL3NWrVq9T9ofl6QabpYLCbmhkRzxFoxS4xLyvl+IN6Ie+KCWJPYc9F2j7hi3gbOiI3Jd0BfKTOsDw2JU+Jbbqg0W9wSH8Rt8VHsF+PTStIG8dR8YH6fJbbJYovYJX6KX+KqmJDUSbVIvDCve0zsEMNirtgr3pn3gT/YghPmcRyw0f6NiEJWb6romHeSCycp352UTRJ3xNvqG8cJ4H23hmtJVZ4HdrQqp9/DmQ1NEzfETvFFrOo19/hbat8xtz0076uopqAJ7rtYl5Wft7o+wbH6j2vziGaaTwSrlgpHN5uvIo7lYgufFattsKBvmtteme/iopqCfm3lgRks6m+t/ne6Vhf9Us62TkVbJoTtT+C5TprnBcYsjf23oDkW2M5Zb17pUVPQDFoaOIKmbfzvpBWsDjp3LL6Xik82eieQL1A/QT+xOoFdE1/NF6F4nlONVdCRCyJIRJuF1f9+gj5ufmME680DP2SePP+osQoakSjThMO2ji3ZT9B534grEdt187pFjWXQQ+bnmsRGsCSw0KBBR5LEzqQW1RQ0s0YHZNRUl6yuv0x8tt57GREQWZ3snip3lHPN9Xfaerf6oEFz03DjYOfeLqopaJygvHRP4yzi7Ny18j1NeX62ckfpizEIPM4zGjToy+Y2/FuR2bpaYP6ComL+xJwnnov7Vp+7YXNnuBJC28QPq88jv0fEpm4N75tdwY5YWX2jeAClDxnas01Zsdj6IV5l4S+JLER/PJMp51W2PbF1FWeuBGk/tFy8FI/EQfMZZDanJHVwap+4aP4c5JcsGs6SWbnz0zH4ppxjQBAxQby3c3+A8ngTNMHYLFarVq1a/Vv6DR659Fpy3NXNAAAAAElFTkSuQmCC>