var o,c;function l(){return c||(c=1,o=function n(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var u,t,f;if(Array.isArray(r)){if(u=r.length,u!=e.length)return!1;for(t=u;t--!==0;)if(!n(r[t],e[t]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(f=Object.keys(r),u=f.length,u!==Object.keys(e).length)return!1;for(t=u;t--!==0;)if(!Object.prototype.hasOwnProperty.call(e,f[t]))return!1;for(t=u;t--!==0;){var s=f[t];if(!n(r[s],e[s]))return!1}return!0}return r!==r&&e!==e}),o}export{l as r};
