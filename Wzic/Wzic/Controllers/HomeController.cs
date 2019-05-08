using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Wzic.Models;
namespace Wzic.Controllers
{
    public class HomeController : Controller
    {
        WzicEntities2 db = new WzicEntities2();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Songs()
        {
            var s = (from song in db.songs select song).ToList();
            string str = "";


            for (int i = 0; i < s.Count; i++)
            {
                str += "<li nth=" + i + ">" + s[i].title_and_artist + "</li>";

            }

            ViewBag.View = str;
            return View();
        }

        public ActionResult Artists()
        {
            var art = (from a in db.artists select a).ToList();
            string str = "";
            for (int i = 0; i < art.Count; i++)
            {
                str += " <div class='swiper-slide'> ";
                str += "<div class='front'> <img nth = " + i + " src=" + art[i].Img + "></div>";
                str += "<div class='back'> ";
                str += " <div class='social'> ";
                str += " <a href =" + art[i].Facebook + " target=\"_blank\" ><i class='fa fa-facebook'></i></a> ";
                str += " <a href = " + art[i].Instagram + " target=\"_blank\"><i class='fa fa-instagram'></i></a> ";
                str += " <a href = " + art[i].Twister + " target=\"_blank\"><i class='fa fa-twitter'></i></a> ";
                str += " </div> ";

                str += " <span class='infoArt'> ";
                str += "    <span>" + art[i].Name + "</span> ";
                str += "   <br> ";
                str += "     <q>" + art[i].Quote + "</q> ";

                str += "  </span>";
                str += " </div> ";

                str += " </div> ";
            }
            ViewBag.View = str;

            return View();
        }

        public ActionResult Videos()
        {
            return View();
        }
    }
}