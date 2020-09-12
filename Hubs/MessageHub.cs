using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace IotSignalRApp.Hubs
{
    public class MessageHub : Hub
    {
        //The SendMessage method can be called by a connected client to send a message to all clients
        public async Task SendMessage(string device, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", device, message);
        }
    }
}