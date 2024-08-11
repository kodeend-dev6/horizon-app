import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import logo from '../assets/logo.png';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../utils/formSchema';
import RHFTextField from '../components/RHFTextField';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

interface formData {
  email: string;
  password: string;
}

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const testUser = {
    email: 'test@admin.com',
    password: 'admin123',
  };

  const onSubmit = (data: formData) => {
    if (data.email === testUser.email && data.password === testUser.password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.headingText}>A Software Platform</Text>

      <RHFTextField
        control={control}
        name="email"
        placeholder="Email"
        errors={errors}
      />
      <RHFTextField
        control={control}
        name="password"
        placeholder="Password"
        errors={errors}
        other={{
          secureTextEntry: true,
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={styles.linkText}
        onPress={() => navigation.navigate('Register')}>
        Create new account.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000435',
  },
  logo: {
    width: 150,
    height: 100,
  },
  headingText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  normalText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#1E90FF',
    fontSize: 16,
    marginTop: 20,
  },
});

export default Login;
