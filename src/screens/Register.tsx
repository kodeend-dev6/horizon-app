import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '../assets/logo.png';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerSchema} from '../utils/formSchema';
import RHFTextField from '../components/RHFTextField';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

interface formData {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register = ({navigation}: RegisterProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: formData) => {
    console.log(data);
    // Alert.alert(JSON.stringify(data));
    Alert.alert('Registration Successful');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.headingText}>Register Here</Text>

      <RHFTextField
        control={control}
        name="name"
        placeholder="Name"
        errors={errors}
      />
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
      <RHFTextField
        control={control}
        name="phone"
        placeholder="Phone"
        errors={errors}
      />
      <RHFTextField
        control={control}
        name="address"
        placeholder="Address"
        errors={errors}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text
        style={styles.linkText}
        onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
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

export default Register;
