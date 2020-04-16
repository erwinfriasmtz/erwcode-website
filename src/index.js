/* ********** Fonts ********** */
import ligthFont from './fonts/Averta_Light.woff'
import regularFont from './fonts/Averta.woff'
import boldFont from './fonts/Averta_Bold.woff'
import blackFont from './fonts/Averta_Black.woff'

/* ********** Images ********** */
import favicon      from './images/favicon.png'
import logoHorizont from './images/imagotipo-horizont-white.svg'
import logoMain     from './images/imagotipo-main-white.svg'

import svgCircle      from './images/vectorCircle.svg'
import svgCircleR     from  './images/vectorCircleRight.svg'
import svgHorizont    from './images/vectorHorizont.svg'
import svgVertical    from './images/vectorVertical.svg'
import svgProgrammer  from './images/programmer.svg'
import svgTeam        from './images/team.svg'
import svgPortafolio  from './images/portafolio.svg'
import svgMouse       from './images/mouse.svg'
import svgWorkflow    from './images/workflow.svg'
import svgServicios   from './images/services.svg'
import svgPortfolio   from './images/projects.svg'
import svgScrum       from './images/scrum.svg'
import svgRectangle   from './images/vectorRectangle.svg'
import svgRectangleH  from './images/vectorRectangleH.svg'
import svgSplash      from './images/vectorSplash.svg'
import svgComment     from './images/icon-comment.svg'

import auditoria    from './images/auditoria-seo.svg'
import branding     from './images/branding-corporativo.svg'
import community    from './images/community-manager.svg'
import consultiria  from './images/consultoria-sem.svg'
import dam          from './images/desarrollo-apps-moviles.svg'
import daw          from './images/desarrollo-apps-web.svg'
import web          from './images/desarrollo-web.svg'
import ui           from './images/ui-ux.svg'
import ecommerce    from './images/ecommerce.svg'
import elearning    from './images/elearning.svg'
import email        from './images/email-marketing.svg'
import fb           from './images/facebook-ads.svg'
import google       from './images/google-ads.svg'
import gram         from './images/instagram-ads.svg'
import landing      from './images/landing-page.svg'
import seo          from './images/posicionamiento-seo.svg'

import arrow  from './images/right-arrow.svg'

import continents from './images/continentes.svg'
import facebook   from './images/facebook.svg'
import instagram  from './images/instagram.svg'
import linkedin   from './images/linkedin.svg'

import usRealidad from './images/realidad-aumentada.jpg'
import about      from './images/about-us.svg'
import usMision   from './images/chico-programando.jpg'
import mision     from './images/mission.svg'
import uVision    from './images/oficina-team.jpg'
import vision     from './images/vision.svg'

import liderazgo    from './images/liderazgo.svg'
import colaboracion from './images/colaboracion.svg'
import compromiso   from './images/compromiso.svg'
import calidad      from './images/calidad.svg'
import pasion       from './images/pasion.svg'

import skills       from './images/skills.svg'
import html         from './images/html.svg'
import css          from './images/css.svg'
import js           from './images/js.svg'
import php          from './images/php.svg'
import laravel      from './images/laravel.svg'
import composer     from './images/composer.svg'
import mysql        from './images/mysql.svg'
import mongodb      from './images/mongodb.svg'
import postresql    from './images/postgresql.svg'
import sqlite       from './images/sqlite.svg'
import nodejs       from './images/nodejs.svg'
import docker       from './images/docker.svg'
import git          from './images/git.svg'
import pug          from './images/pug.svg'
import sass         from './images/sass.svg'
import webpack      from './images/webpack.svg'
import react        from './images/react.svg'
import vue          from './images/vue.svg'
import angular      from './images/angular.svg'
import android      from './images/android.svg'
import materialize  from './images/materialize.svg'
import bootstrap    from './images/bootstrap.svg'
import python       from './images/python.svg'
import figma        from './images/figma.svg'
import xd           from './images/xd.svg'
import psd          from './images/psd.svg'
import ai           from './images/ai.svg'
import ads          from './images/ads.svg'
import analytics    from './images/analytics.svg'
import hotjar       from './images/hotjar.svg'
import aws          from './images/aws.svg'
import cloud        from './images/cloud.svg'

import projectDirectorio      from './images/directorio-tehuacan.jpg'
import projectLlantas         from './images/llantas-rines.jpg'
import projectTepole          from './images/tepole.jpg'
import projectSacamo          from './images/sacamo.jpg'
import projectGonzalez        from './images/gonzalez-asociados.jpg'
import projectAtope           from './images/atope.jpg'
import projectMilenium        from './images/milenium.jpg'
import projectMileniumOnline  from './images/milenium-online.jpg'
import projectOportunos       from './images/oportunos.jpg'
import projectOportunosMx     from './images/oportunosmx.jpg'

import logoDt          from './images/logo-dt.svg'
import logoTepole      from './images/logo-tepole.svg'
import logoGonzalez    from './images/logo-gonzalez.svg'
import logoAtope       from './images/logo-atope.svg'
import logoTusOfertias from './images/logo-tusOfertias.svg'
import logoSacamo      from './images/logo-sacamo.svg'
import logoNursely     from './images/logo-nursely.svg'
import logoMilenium    from './images/logo-unimilenium.svg'
import logoOportunos   from './images/logo-oportunos.svg'
import logoJCDecaux    from './images/logo-jcdecaux.svg'

import ogImage from './images/erwcode.jpg'


/* ********** Videos ********** */

import sketching  from './media/sketching.mp4'


/* ********** CSS ********** */

import scss from './scss/main.scss'


/* ********** JavaScript ********** */

import { activeMenu } from './js/menu'
import { messengerChat } from './js/messenger'
import { writterEffect } from './js/writerEffect'
import { sliderComments } from './js/comments'

activeMenu()
messengerChat()



if(document.getElementById('comments')) {
  sliderComments()
} else {
  console.log("ErwCode Technologies")
}

writterEffect()

// Scroll toggler
let lastScrollTop = 0,
    header = document.getElementById('header');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop) {
    header.style.top="-90px";
  } else {
    header.style.top="0px"
  }
  lastScrollTop = scrollTop
})

