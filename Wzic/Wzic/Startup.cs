using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Wzic.Startup))]
namespace Wzic
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
