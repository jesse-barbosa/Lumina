import { supabase } from "../services/supabase";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AtSign, KeyRound, Eye, EyeOff, ArrowBigRightDash } from "lucide-react-native";

export default function Login() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Usando o Supabase para login
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Erro ao fazer login: " + error.message);
      return;
    }

    console.log("Login bem-sucedido:", data?.user);
    (navigation as any).navigate("Home");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View className="flex-1">
      <View className="w-full flex items-center justify-center py-6">
        <Text className="font-extrabold text-3xl">Lumina</Text>
      </View>
      {/* Inputs */}
      <View className="flex-1 flex flex-col items-center justify-center px-8 mt-8">

        {/* Input - Email */}
        <View className="w-full max-w-md flex flex-row gap-3 mt-6 items-center border-neutral-500 border-b-2 ">
          <AtSign size={22} color="#8B8787" />
          <TextInput 
            placeholder="Email" 
            className="flex-1 text-md text-neutral-700 py-5"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Input - Password */}
        <View className="w-full max-w-md flex flex-row gap-3 mt-6 items-center border-neutral-500 border-b-2">
          <KeyRound size={22} color="#8B8787" />
          <TextInput 
            placeholder="Senha" 
            secureTextEntry={!showPassword}
            className="flex-1 text-md text-neutral-700 py-5"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} className="flex-shrink-0">
            {showPassword ? (
              <EyeOff size={22} color="#8B8787" />
            ) : (
              <Eye size={22} color="#8B8787" />
            )}
          </TouchableOpacity>
        </View>

      </View>
      <View className="m-6">
        <TouchableOpacity 
          onPress={handleLogin} 
          className="flex flex-row px-4 items-center justify-between w-full bg-blue-500 py-4 rounded-lg shadow-xl"
        >
          <View />
          <Text className="text-xl text-white font-semibold">Entrar</Text>
          <ArrowBigRightDash size={30} color="#fff" />
        </TouchableOpacity>
        <View className="flex flex-row items-center justify-center">
          <Text className="text-neutral-600 text-center mt-4">Não tem uma conta?</Text>
          <TouchableOpacity 
            onPress={() => (navigation as any).navigate('Register')} 
            className="flex flex-row items-center text-neutral-700 text-center mt-4"
          >
            <Text className="text-blue-500 ms-1 font-medium">Crie uma</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
