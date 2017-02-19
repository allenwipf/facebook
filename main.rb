require "sinatra"

get "/" do
    erb :home
end

get "/replies" do
    erb :data
end